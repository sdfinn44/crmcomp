import { newE2EPage } from '@stencil/core/testing';

describe('crmjustforme-people', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<crmjustforme-people></crmjustforme-people>');

    const element = await page.find('crmjustforme-people');
    expect(element).toHaveClass('hydrated');
  });
});
