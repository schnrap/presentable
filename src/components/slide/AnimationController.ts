export class AnimationController {

  public readonly ANIMATION_TRIGGER = 'pr-animate';
  public readonly ANIMATION_FLAG = 'pr-animated';
  public readonly ANIMATION_CUSTOM_ATTRIBUTE = 'pr-animate-classes';

  index: number = -1;

  //animations: HTMLElement[];

  constructor(private host: HTMLElement) {
  }

  get animations() {
    return Array.from(this.host.querySelectorAll('.' + this.ANIMATION_TRIGGER)) as any[]
  }

  public hasNext() {
    return this.hasAnimations() && this.animations[this.index + 1];
  }

  public hasAnimations() {
    return !!this.animations.length;
  }

  public hasPrev() {
    return this.hasAnimations() && this.animations[this.index-1]
  }

  public prev() {
    if (!this.hasPrev()) console.error('no prev animation available');

    this.resetAnimate(this.animations[this.index]);
    this.index--;
  }

  public next() {
    if (!this.hasNext()) console.error('no next animation available');

    this.animate(this.animations[this.index + 1]);
    this.index++;
  }

  animate(elem: HTMLElement) {
    const customAnimationClasses = elem.getAttribute(this.ANIMATION_CUSTOM_ATTRIBUTE);
    const animatedClass = customAnimationClasses || this.ANIMATION_FLAG;

    elem.classList.add(...animatedClass.split(' '));
  }

  resetAnimate(elem: HTMLElement) {
    const customAnimationClasses = elem.getAttribute(this.ANIMATION_CUSTOM_ATTRIBUTE);
    const animatedClass = customAnimationClasses || this.ANIMATION_FLAG;

    elem.classList.remove(...animatedClass.split(' '));
  }

  public reset() {
    this.animations.forEach(animation => {
      this.resetAnimate(animation);
    });
    this.index = -1;
  }

}
