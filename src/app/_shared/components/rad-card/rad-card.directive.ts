import {
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[radFloatHover]',
})
export class RadCardDirective implements AfterViewInit {
  public el = this._elRef.nativeElement;

  constructor(
    private _elRef: ElementRef<HTMLElement>,
    private _rd: Renderer2
  ) { }

  ngAfterViewInit(): void {
    const style = <any>{
      display: 'none',
      position: 'absolute',
      top: '-15px',
      right: 0,
      'background-color': 'inherit',
      'border-radius': '50%',
      'box-shadow': '1px 1px 9px 1px rgb(0 0 0 / 20%)',
    };

    Object.keys(style).forEach((key) => {
      this._rd.setStyle(this.el, key, style[key]);
    });
  }
}
