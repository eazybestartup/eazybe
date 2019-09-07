import React, { PureComponent } from 'react'
import EventEmitter from 'sm-event-emitter'
import AwesomeAlert from 'react-native-awesome-alerts';

export class GlobalAlert extends PureComponent {
  state = {
    isVisible: false,
    data: {},
  }

  static GLOBAL_ALERT_EVENT = 'GLOBAL_ALERT_EVENT'

  static show(data) {
    EventEmitter.emit(GlobalAlert.GLOBAL_ALERT_EVENT, data)
  }

  static errorMessage(title, message) {
    return GlobalAlert.show({
      title,
      message,
      confirmText: 'Ok',
      handleConfirmation: () => {},
    })
  }

  componentDidMount() {
    EventEmitter.on(GlobalAlert.GLOBAL_ALERT_EVENT, data => {
      this.setState({ data, isVisible: true })
    })
  }

  dismissAlert = () => {
    this.setState({ data: {}, isVisible: false })
  }

  handleConfirmation = () => {
    if (this.state.data.onConfirm) {
      this.state.data.onConfirm()
    }

    this.dismissAlert()
  }

  handleOnCancel = () => {
    this.dismissAlert()
    if (!!this.state.data.onCancelText && !this.state.data.onCancel) {
      return () => {}
    }
    return this.state.data.onCancel()
  }

  render() {
    const { isVisible, data } = this.state

    const hasOnCancel = !!data.onCancel
    const hasOnCancelText = !!data.onCancelText
    const cancelHandler =
      hasOnCancelText || hasOnCancel ? { onCancel: this.handleOnCancel } : {}
    return (
      <AwesomeAlert
        {...data}
        show={isVisible}
        showProgress={false}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          this.hideAlert();
        }}
        onConfirmPressed={this.handleConfirmation}
        {...cancelHandler}
    />
    )
  }
}
