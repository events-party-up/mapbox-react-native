import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Styles = StyleSheet.create({
  shadow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modal: {
    width: width / 1.2,
    alignItems: 'center',
    padding: 20,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    color: '#333',
    fontWeight: '800',
  },
  input: {
    padding: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
  },
  btn: {
    alignItems: 'center',
    borderRadius: 6,
    width: '50%',
  },
  labelSubmit: {
    fontWeight: '800',
  },
});

export default Styles;
