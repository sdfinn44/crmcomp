import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'crmjustforme-dashboard',
  styleUrl: 'crmjustforme-dashboard.css',
  shadow: true
})
export class CrmjustformeDashboard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
