import { animate, style, transition, trigger } from '@angular/animations';

export const catalogAnimations = [
  trigger('disappear', [transition('* => void', [animate('500ms ease-in-out'), style({ height: '0px', opacity: 0 })])]),
];
