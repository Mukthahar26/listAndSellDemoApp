import React from 'react';
import {TextStyle, TouchableOpacity} from 'react-native';

type props = {
  children: any;
  style?: TextStyle;
  onPress: () => void;
};

const AppButton = ({children, style, onPress}: props) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  );
};

export default AppButton;
