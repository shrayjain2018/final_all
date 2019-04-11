import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appExample]'
})

export class ExampleDirective {

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor
  }

  @Input() defaultColor = 'green';
  @Input() highlightColor = 'yellow';

  private backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'green')
  }

}
