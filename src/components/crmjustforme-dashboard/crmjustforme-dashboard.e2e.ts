import { newE2EPage } from '@stencil/core/testing';

describe('crmjustforme-dashboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<crmjustforme-dashboard></crmjustforme-dashboard>');

    const element = await page.find('crmjustforme-dashboard');
    expect(element).toHaveClass('hydrated');
  });
});
