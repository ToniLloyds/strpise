import React, {memo} from 'react';
import {Button as RNButton, ButtonProps} from 'react-native';

interface MButtonProps extends ButtonProps {}

export const Button = memo((props: MButtonProps) => {
  return <RNButton {...props} />;
});
