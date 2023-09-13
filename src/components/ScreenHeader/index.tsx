import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import AppText from '../appText';

type PropsType = {
  headerName?: string;
};

const ScreenHeader = ({headerName}: PropsType) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AntDesign onPress={goBack} name="left" style={styles.arrowIcon} />
      <AppText style={styles.nameLabel} numberOfLines={1}>
        {headerName}
      </AppText>
      <View />
    </View>
  );
};

export default ScreenHeader;
