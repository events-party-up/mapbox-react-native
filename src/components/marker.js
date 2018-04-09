import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { connect } from 'react-redux';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import Styles from './marker.styles';

const Marker = ({ users }) => {
  console.tron.log(users);
  return (
    users.map(user => (
      <MapboxGL.PointAnnotation
        title=""
        coordinate={
          [
            user.lng,
            user.lat,
          ]
        }
      >
        <View style={Styles.markerBorder}>
          <Image style={Styles.markerFill} source={{ uri: user.avatar_url }} />
        </View>
        <MapboxGL.Callout style={Styles.container}>
          <TouchableOpacity onPress={() => { Linking.openURL(user.html_url); }}>
            <Text style={Styles.user}>{user.name}</Text>
            <Text style={Styles.bio}>{user.bio}</Text>
            <Text style={Styles.url}>{user.html_url}</Text>
          </TouchableOpacity>
        </MapboxGL.Callout>
      </MapboxGL.PointAnnotation>
    ))
  );
};

const mapStateToProps = state => ({
  users: state.Users,
});

export default connect(mapStateToProps)(Marker);
