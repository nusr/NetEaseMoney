import React from 'react';
import {TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import colorConfig from '../shared/color'

function Button(props) {
  const {children, onPress, ...rest} = props
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={colorConfig.touchOpacity} {...rest}>
      {children}
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default Button
