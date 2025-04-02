import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {
  @Input() animationClass: string = 'animate';
  @Input() offset: number = 100;
  
  private isAnimated: boolean = false;
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isElementInViewport() && !this.isAnimated) {
      this.renderer.addClass(this.elementRef.nativeElement, this.animationClass);
      this.isAnimated = true;
    }
  }
  
  ngOnInit() {
    // Add a basic class to all sections with this directive
    this.renderer.addClass(this.elementRef.nativeElement, 'scroll-animation');
    
    // Initial check in case elements are already in viewport when page loads
    setTimeout(() => {
      this.onWindowScroll();
    }, 100);
  }
  
  private isElementInViewport(): boolean {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    
    return (
      rect.top <= window.innerHeight - this.offset &&
      rect.bottom >= 0
    );
  }
}
