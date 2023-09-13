import React from 'react';
import {View, Text, TextStyle} from 'react-native';
import styles from './styles';

type props = {
  children: any;
  style?: TextStyle;
  props?: any;
  numberOfLines?: number;
  adjustsFontSizeToFit?: boolean;
  onPress?: any;
};

const AppText = ({children, style, numberOfLines}: props) => {
  return (
    <Text style={[styles.label, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default AppText;
