import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import ScreenHeader from '../../components/ScreenHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppText from '../../components/appText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../screenNavigators/rootNavigator';
import {screenNames} from '../../constants/enums';

type Props = NativeStackScreenProps<RootStackParamList, screenNames.DETAILS>;

const Details = ({route}: Props) => {
  const params = route?.params;
  const {countryName, flagImage, official} = params;
  return (
    <View style={styles.container}>
      <ScreenHeader headerName="Details" />
      <View style={styles.subContainer}>
        <Image source={{uri: flagImage}} style={styles.image} />
        <View style={styles.countryNameView}>
          <MaterialIcons name="location-on" style={styles.iconstyle} />
          <AppText style={styles.countryLabel}>{countryName}</AppText>
        </View>
        <AppText style={styles.officialLabel}>{official}</AppText>
      </View>
    </View>
  );
};

export default Details;
