import {DEFAULT_MONEY, DEFAULT_MONEY_PREFIX} from '../constants';
const Record = {
  state: {
    categoryId: '', // 类型id
    description: '', // 描述
    money: DEFAULT_MONEY, // 金额
    time: +new Date(), //
    type: '',
    prefix: DEFAULT_MONEY_PREFIX,
    apply: false,
  },
  actions: ({model, setState}) => ({
    setMoney(money) {
      setState({money});
    },
    setApply() {
      const {apply} = model();
      setState({
        apply: !apply,
      });
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
