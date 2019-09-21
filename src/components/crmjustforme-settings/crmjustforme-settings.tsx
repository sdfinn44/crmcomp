import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'crmjustforme-settings',
  styleUrl: 'crmjustforme-settings.css',
  shadow: true
})
export class CrmjustformeSettings {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
