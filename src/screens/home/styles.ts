import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6cca3',
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLabel: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  helloLabel: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchInputStyle: {
    height: 50,
  },
  inputText: {
    fontSize: 16,
    color: 'black',
    flex: 0.9,
  },
  searchInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    paddingLeft: 15,
    height: 50,
    borderRadius: 50 / 2,
  },
  iconstyle: {
    fontSize: 25,
    textAlignVertical: 'center',
    color: 'black',
  },
  topListLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  listStyle: {
    flexGrow: 0,
    height: '60%',
  },
  contentStyle: {
    marginTop: 50,
    paddingLeft: '20%',
  },
  row: {
    alignItems: 'center',
    marginRight: 50,
  },
  image: {
    width: 200,
    height: '80%',
    resizeMode: 'center',
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
  refreshData: {
    backgroundColor: 'black',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 20,
  },
  refreshLabel: {
    color: 'white',
  },
});

export default styles;
