import React from 'react';
import {TouchableOpacity} from 'react-native'
import colorConfig from '../constants/color'

type Props = {
  onPress: () => void;
  style?: object;
}
const Button: React.FunctionComponent<Props> = ({
  children, onPress,style = {}, ...rest
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} activeOpacity={colorConfig.touchOpacity} {...rest}>
      {children}
    </TouchableOpacity>
  )
}

export default Button
