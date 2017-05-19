import Component, { tracked } from '@glimmer/component';
export default class GlimmerDraggable extends Component {
  list: any[];
  value: any[];
  noTransitionOnDrag: boolean = false;
  clone: Function = (original) => { return original; };
  element: HTMLElement;
  move: Function = null;

  constructor(options) {
    super(options);
  }

  didInsertElement() {

  }
}
