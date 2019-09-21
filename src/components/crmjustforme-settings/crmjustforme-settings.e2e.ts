import { newE2EPage } from '@stencil/core/testing';

describe('crmjustforme-settings', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<crmjustforme-settings></crmjustforme-settings>');

    const element = await page.find('crmjustforme-settings');
    expect(element).toHaveClass('hydrated');
  });
});
