import CONST from './utils/constants';
import components from './components';

import './utils/init';

import './assets/base.scss';

const constants = new CONST();
const componentsInst = components.map(c => new c(constants));

setInterval(() => {
  componentsInst.forEach(c => c.update());
}, 1000);
