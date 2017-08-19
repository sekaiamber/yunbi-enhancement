import BaseComponent from '../base';
import './style.scss';

export default class Refresher extends BaseComponent {
  constructor(CONST) {
    super(CONST);
    this.count = this.CONST.get('refreshTime');
  }

  init() {
    const $refresher = this.$('<div id="refresher" class="board">自动刷新脚本加载成功...</div>');
    this.$('body').append($refresher);
    this.$dom = $refresher;
  }

  update() {
    this.count = this.count - 1;
    this.$dom.html('刷新：' + this.count + 's');
    if (this.count === 0) {
      window.location.reload();
    }
  }
}

