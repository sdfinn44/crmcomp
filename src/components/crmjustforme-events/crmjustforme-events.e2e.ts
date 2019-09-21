import { newE2EPage } from '@stencil/core/testing';

describe('crmjustforme-events', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<crmjustforme-events></crmjustforme-events>');

    const element = await page.find('crmjustforme-events');
    expect(element).toHaveClass('hydrated');
  });
});
