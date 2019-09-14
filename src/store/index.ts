import Record from './record';
import Page from './page';
import {setModel, useModel} from './base';
const storeList = {
  Record,
  Page,
};
const STORE_NAMESPACE = {
  Record: 'Record',
  Page: 'Page',
};
function initStore() {
  Object.entries(storeList).forEach(([key, value]) => {
    setModel(key, value);
  });
}
console.log(STORE_NAMESPACE);
export {initStore, setModel, useModel, STORE_NAMESPACE};
