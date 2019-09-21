import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'crmjustforme-events',
  styleUrl: 'crmjustforme-events.css',
  shadow: true
})
export class CrmjustformeEvents {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
