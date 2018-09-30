export class AnimationController {

  static readonly ANIMATABLE_CSS_CLASS = 'pres-animate';
  static readonly ANIMATION_TRIGGER_CSS_CLASS = 'pres-animated';

  animations: HTMLElement[] = [];
  /**
   * index of the next animation triggered
   */
  private index: number;

  setSlide(slide: HTMLElement){
    if (slide) {
      this.animations = Array.from(slide.querySelectorAll('.' + AnimationController.ANIMATABLE_CSS_CLASS)) as any[];
    } else{
      this.animations = [];
    }
    this.index = 0;
    this.reset();
  }

  /**
   * triggers next animation or returns false (if no animation available
   */
  next(): boolean {
    if (this.animations.length == 0 || !this.animations[this.index]) return false;
    this.animations[this.index].classList.add(AnimationController.ANIMATION_TRIGGER_CSS_CLASS);
    this.index++;
    return true
  }

  /**
   * triggers previous animation or returns false (if no animation available
   */
  prev(): boolean {
    if (this.animations.length == 0 || !this.animations[this.index-1]) return false;
    this.index--;
    this.animations[this.index].classList.remove(AnimationController.ANIMATION_TRIGGER_CSS_CLASS);
    return true;
  }

  reset() {
    this.animations.forEach(animation => animation.classList.remove(AnimationController.ANIMATION_TRIGGER_CSS_CLASS));
  }

}
