import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'alert-component',
  styleUrl: 'index.css',
  shadow: true,
})
export class Alert {
  @Prop() header: string;

  @Prop() description: string;

  render() {
    return (
      <div class="alert-container">
        <strong class="alert-header">{this.header}</strong>

        <p>{this.description}</p>
      </div>
    );
  }
}
