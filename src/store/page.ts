const Page = {
  state: {
    descFocus: false,
  },
  actions: ({model, setState}) => ({
    toggleFocus() {
      const {descFocus} = model();
      setState({
        descFocus: !descFocus,
      });
    },
  }),
};

export default Page;
