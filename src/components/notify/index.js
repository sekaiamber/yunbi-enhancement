/* eslint no-mixed-operators: 0 */
import BaseComponent from '../base';
import dragable from '../dragable';
import { notify } from '../../utils';

// import './style.scss';

export default class Notify extends BaseComponent {
  init() {
    const $div = this.$('<div id="notify" class="board"></div>');
    // <div> <input id="notify"></input> <button id="notifyBt">设置提示</button> </div>
    $div.append('<div>阈值</div>');
    const $inputValue = this.$('<input></input>');
    $div.append($inputValue);
    $div.append('<div>差距</div>');
    const $inputDiff = this.$('<input></input>');
    $div.append($inputDiff);
    const $bt = this.$('<button>设置提示</button>');
    $div.append($bt);
    this.$('body').append(dragable($div, this, {
      key: 'notify',
      top: 50,
    }));

    $bt.click(() => {
      localStorage.setItem('sekai_notify_value', $inputValue.val());
      localStorage.setItem('sekai_notify_diff', $inputDiff.val());
    });
    $inputValue.val(localStorage.getItem('sekai_notify_value'));
    $inputDiff.val(localStorage.getItem('sekai_notify_diff'));
  }

  update() {
    const num = parseInt(localStorage.getItem('sekai_notify_value'), 10);
    const diff = parseFloat(localStorage.getItem('sekai_notify_diff'));
    const $origin = this.$('#ticker')[0].children[0];
    const price = parseFloat($origin.innerText);
    if (Math.abs(num - price) <= diff) {
      notify(`云币提醒：当前${price}，阈值${num}`);
    }
  }
}

