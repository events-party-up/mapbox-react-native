import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Styles = StyleSheet.create({
  markerBorder: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 24,
  },
  markerFill: {
    width: 48,
    height: 48,
    borderRadius: 24,
    transform: [{ scale: 0.75 }],
  },
  container: {
    width: width / 2,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 12,
    fontWeight: '200',
  },
  url: {
    paddingTop: 1,
    fontSize: 10,
    fontWeight: '100',
    color: 'grey',
  },
});

export default Styles;
