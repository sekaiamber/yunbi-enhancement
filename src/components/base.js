export default class BaseComponent {
  constructor(CONST) {
    this.CONST = CONST;
    this.$ = window.$;
    this.init();
  }

  init() {}

  update() {}
}
