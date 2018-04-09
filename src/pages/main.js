import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../store/actions';

import Marker from '../components/marker';
import Modal from '../components/modal';

import Styles from './main.styles';

class Main extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    main: PropTypes.arrayOf({
      location: PropTypes.arrayOf({
        lng: PropTypes.string,
        lat: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {}

  render() {
    return (
      <MapboxGL.MapView
        rotateEnabled={false}
        style={Styles.container}
        zoomLevel={12}
        onLongPress={() => {
          this.props.showModal(true);
        }}
        centerCoordinate={
          [
            this.props.main.location.lng,
            this.props.main.location.lat,
          ]
        }
      >
        <Modal />
        <Marker />
        <View style={Styles.instructions}>
          <Text style={Styles.text}>Tap and hold the map to add a new local</Text>
        </View>
      </MapboxGL.MapView>
    );
  }
}

const mapStateToProps = state => ({
  main: state.Main,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
