import { Component } from '@angular/core';

@Component({
  selector: 'components-sg-basic',
  template: ` <div sg-container="4">
    <sg *ngFor="let i of ls; let idx = index">
      <div class="item">{{ idx + 1 }}</div>
    </sg>
  </div>`,
  styles: [
    `
      :host .sg__item {
        padding: 5px 0;
        text-align: center;
        border-radius: 0;
        min-height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
      }
      :host .item {
        background: #00a0e9;
        height: 120px;
        line-height: 120px;
        font-size: 13px;
      }
    `,
  ],
})
export class ComponentsSgBasicComponent {
  ls = Array(4).fill(0);
}