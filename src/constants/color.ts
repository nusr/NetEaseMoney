const primaryColor = '#ff595f';
type ColorConfig = {
  primaryColor: string;
  red: string;
  green: string;
  white: string;
  black: string;
  lightGray: string;
  baseFontSize: number;
  basePadding: number;
  title: string;
  subTitle: string;
  deepGreen: string;
  tabColor: string;
  checkHeader: string;
  f8: string;
  borderColor: string;
  iconColor: string;
  flexBetween: {
    display: string;
    justifyContent: string;
    flexDirection: string;
    alignItems: string;
  };
  touchOpacity: number;
};
const colorConfig: ColorConfig = {
  primaryColor,
  red: primaryColor,
  green: '#0f0',
  white: '#fff',
  black: '#000',
  lightGray: '#c0c1cc',
  baseFontSize: 20,
  basePadding: 15,
  title: '#2b3040',
  subTitle: '#8c8f98',
  deepGreen: '#02ae7c',
  tabColor: '#3e465b',
  checkHeader: '#352f68',
  f8: '#f8f8f8',
  borderColor: '#e5e5e5',
  iconColor: '#d0d0d0',
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchOpacity: 0.8,
};
export default colorConfig;
