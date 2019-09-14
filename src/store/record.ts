import {DEFAULT_MONEY, DEFAULT_MONEY_PREFIX} from '../constants';
const Record = {
  state: {
    categoryId: '', // 类型id
    description: '', // 描述
    money: DEFAULT_MONEY, // 金额
    time: 0, //
    type: '',
    prefix: DEFAULT_MONEY_PREFIX,
  },
  actions: ({setState}) => ({
    setMoney(money) {
      setState({money});
    },
    setDescription(description) {
      setState({description});
    },
    setTime(time) {
      setState({time});
    },
  }),
};

export default Record;
