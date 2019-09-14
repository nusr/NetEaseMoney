const Record = {
  state: {
    categoryId: '', // 类型id
    description: '', // 描述
    money: 0, // 金额
    time: 0, //
    type: '',
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
