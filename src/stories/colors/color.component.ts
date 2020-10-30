import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-Color',
  template: `
    <div [ngClass]="classes" [ngStyle]="{ 'background-color': backgroundColor }">
    <p class='color-name'>{{ color }}</p>
    </div>
  `,
  styleUrls: ['./color.scss'],
})
export default class ColorComponent {
  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

/**
   * color
   *
   * @required
   */
  @Input()
  color = 'primary';


  public get classes(): string[] {

    return ['color', this.color];
  }
}
