/* eslint no-mixed-operators: 0 */
import BaseComponent from '../base';
import dragable from '../dragable';

import './style.scss';

export default class Stalls extends BaseComponent {
  init() {
    const $div = this.$('<div id="stalls" class="board"></div>');
    const $div10 = this.$('<div> <div>买卖10档</div> <div id="div10" class="stall"> <div class="bid"></div> </div> </div>');
    const $div5 = this.$('<div> <div>买卖5档</div> <div id="div5" class="stall"> <div class="bid"></div> </div> </div>');
    const $div3 = this.$('<div> <div>买卖3档</div> <div id="div3" class="stall"> <div class="bid"></div> </div> </div>');
    $div.append($div10);
    $div.append($div5);
    $div.append($div3);
    this.$('body').append(dragable($div, this, {
      key: 'stalls',
      top: 100,
    }));
    this.$dom = $div;
    this.$bids = this.$('.table.bids');
    this.$asks = this.$('.table.asks');
  }

  update() {
    // 更新买卖
    [10, 5, 3].forEach(num => this.updateDiv(num));
  }

  updateDiv(num) {
    const bids = this.$('tr', this.$bids).toArray()
      .map(elm => parseFloat(elm.children[0].innerText))
      .slice(0, num)
      .reduce((l, r) => l + r, 0);
    const asks = this.$('tr', this.$asks).toArray()
      .map(elm => parseFloat(elm.children[2].innerText))
      .slice(0, num)
      .reduce((l, r) => l + r, 0);
    const div = bids / (bids + asks) * 100;
    this.$('#div' + num + ' .bid').css('width', div.toFixed(2) + '%');
    this.$('#div' + num + ' .bid').html(div.toFixed(2) + '%');
  }
}

