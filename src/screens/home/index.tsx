import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {asyncFetch} from '../../endpoints/asyncFetch';
import {FETCHALLCOUNTRIESLIST} from '../../endpoints/endpoints';
import AppText from '../../components/appText';
import AppButton from '../../components/appButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../screenNavigators/rootNavigator';
import {screenNames} from '../../constants/enums';

type Props = NativeStackScreenProps<RootStackParamList, screenNames.HOME>;

const Home = ({navigation}: Props) => {
  const [countryList, setCountryList] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  let flagListref = useRef<any>();

  const getCountryList = async () => {
    setCountryList([]);
    setFilteredData([]);
    if (flagListref.current)
      flagListref.current.scrollToIndex({animated: true, index: 0});
    try {
      const result: any[] = await asyncFetch(FETCHALLCOUNTRIESLIST);
      if (result.length) {
        setCountryList(result);
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCountryList();
  }, []);

  const navigateTo = (item: any) => {
    const {
      name: {common, official},
      flags: {png},
    } = item;
    navigation.navigate(screenNames.DETAILS, {
      countryName: common,
      flagImage: png,
      official,
    });
  };

  const renderItem = ({item, index}: any) => {
    const {
      name: {common},
      flags: {png},
    } = item;
    return (
      <AppButton onPress={() => navigateTo(item)} style={styles.row}>
        <Image source={{uri: png}} style={styles.image} />
        <View style={styles.countryNameView}>
          <MaterialIcons name="location-on" style={styles.iconstyle} />
          <AppText style={styles.countryLabel} numberOfLines={1}>
            {common}
          </AppText>
        </View>
      </AppButton>
    );
  };

  const searchCountry = (text: string) => {
    if (text != '') {
      setIsSearchEnabled(true);
      const filter = countryList.filter(item => {
        const {
          name: {common},
          flags: {png},
        } = item;
        return common.includes(text);
      });
      setFilteredData(filter);
    } else {
      setIsSearchEnabled(false);
      getCountryList();
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator color={'black'} />
        </View>
      ) : (
        <>
          <AppText style={styles.headerLabel}>Country</AppText>
          <AppText style={styles.helloLabel}>Hello Everyone</AppText>
          <View style={styles.searchInputContainer}>
            <AntDesign name="search1" style={styles.iconstyle} />
            <TextInput style={styles.inputText} onChangeText={searchCountry} />
          </View>
          <AppText style={styles.topListLabel}>Top Picks for you</AppText>

          <FlatList
            ref={ref => (flagListref.current = ref)}
            style={styles.listStyle}
            contentContainerStyle={styles.contentStyle}
            horizontal
            data={isSearchEnabled ? filteredData : countryList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <AppButton style={styles.refreshData} onPress={getCountryList}>
            <AppButton onPress={getCountryList}>
              <AppText style={styles.refreshLabel}>Refresh Data</AppText>
            </AppButton>
          </AppButton>
        </>
      )}
    </View>
  );
};

export default Home;
