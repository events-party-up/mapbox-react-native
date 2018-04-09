import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../store/actions';

import Styles from './modal.styles';

class AlertModal extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    main: PropTypes.arrayOf({
      modalVisible: PropTypes.bool,
    }).isRequired,
  };

  state = {
    userInput: '',
  }

  addUser = () => {
    if (!this.state.userInput.length) return;
    this.props.addUserRequest(this.state.userInput);
    this.props.showModal(false);
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.main.modalVisible}
      >
        <View style={Styles.shadow}>
          <View style={Styles.modal}>
            <Text style={Styles.title}>Add new local</Text>
            <TextInput
              autoCapitalize="none"
              style={Styles.input}
              placeholder="Insert a GitHub user"
              value={this.state.userInput}
              onChangeText={userInput => this.setState({ userInput })}
            />
            <View style={Styles.buttons}>
              <TouchableOpacity
                style={Styles.btn}
                onPress={() => {
                  this.props.showModal(false);
                }}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.btn}
                onPress={this.addUser}
              >
                <Text style={Styles.labelSubmit}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  main: state.Main,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlertModal);
