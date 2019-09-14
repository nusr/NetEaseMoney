import Record from './record';
import Page from './page';
import {setModel, useModel} from './base';
const storeList = {
  Record,
  Page,
};
const STORE_NAMESPACE: {[key: string]: string} = {};
Object.keys(storeList).forEach(key => {
  STORE_NAMESPACE[key] = key;
});
function initStore() {
  Object.entries(storeList).forEach(([key, value]) => {
    setModel(key, value);
  });
}
console.log(STORE_NAMESPACE);
export {initStore, setModel, useModel, STORE_NAMESPACE};
