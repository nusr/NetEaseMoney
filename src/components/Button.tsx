import React from 'react';
import {TouchableOpacity} from 'react-native'
import colorConfig from '../constants/color'

type Props = {
  onPress: () => void;
}
const Button: React.FunctionComponent<Props> = ({
  children, onPress, ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={colorConfig.touchOpacity} {...rest}>
      {children}
    </TouchableOpacity>
  )
}

export default Button
