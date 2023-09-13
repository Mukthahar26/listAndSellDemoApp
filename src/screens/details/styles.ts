import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6cca3',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '65%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius: 50,
  },
  countryNameView: {
    marginTop: 20,
    borderWidth: 1,
    height: 40,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40 / 2,
  },
  countryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  officialLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
  },
  iconstyle: {
    fontSize: 25,
    marginLeft: 20,
    textAlignVertical: 'center',
    color: 'black',
  },
});

export default styles;
