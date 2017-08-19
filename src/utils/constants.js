import consts from './const.json';

export default class CONST {
  constructor() {
    const $ = window.$;
    this.const = {
      ...consts,
      winWidth: $(window).width(),
      winHeight: $(window).height(),
    };
  }
  get(key) {
    return this.const[key];
  }
}
