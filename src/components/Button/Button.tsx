import React from 'react';
import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';

/**
 * Component props.
 */
type Props = {
  block?: boolean;
  title?: string;
} & TouchableOpacityProps;

const Button = ({ style, title, block, ...rest }: Props) => {
  return (
    <TouchableOpacity style={style} {...rest}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
