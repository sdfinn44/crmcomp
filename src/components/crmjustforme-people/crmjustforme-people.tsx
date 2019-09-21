import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'crmjustforme-people',
  styleUrl: 'crmjustforme-people.css',
  shadow: true
})
export class CrmjustformePeople {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
