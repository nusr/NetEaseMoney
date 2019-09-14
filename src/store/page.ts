const Page = {
  state: {
    descFocus: false,
  },
  actions: ({model, setState}) => ({
    toggleFocus() {
      const {descFocus} = model();
      setState(!descFocus);
    },
  }),
};

export default Page
