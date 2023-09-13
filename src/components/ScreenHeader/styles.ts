import {StyleSheet} from 'react-native';

const imageSize = 30;
export default StyleSheet.create({
  container: {
    height: imageSize + 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e6cca3',
  },
  nameLabel: {
    marginLeft: -40,
    maxWidth: '70%',
    fontWeight: 'bold',
    fontSize: 18,
  },
  arrowIcon: {
    fontSize: imageSize,
    resizeMode: 'contain',
    color: 'black',
  },
});
