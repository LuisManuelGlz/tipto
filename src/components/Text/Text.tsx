import React from 'react';
import { Text, TextProps } from 'react-native';
import styles from './Text.styles';

type Props = {
  children: React.ReactNode;
} & TextProps;

const TextBase = ({ children, style, ...rest }: Props) => {
  const customStyles = [styles.default, style];

  return (
    <Text {...rest} style={customStyles}>
      {children}
    </Text>
  );
};

export default TextBase;
