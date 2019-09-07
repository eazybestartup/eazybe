import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { changeMenuTabMenuBottom } from '../../state/menu/menu.actions'
import colors from '../../ui/colors/colors.enum';
import { NoticiasConnected } from '../../ui/screens/Noticias'
import User from '../../ui/screens/User';

class TabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.defineScreen = this.defineScreen.bind(this)
  }

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color={"white"} type="font-awesome" name={icon} />
  )

  renderTab = ({ tab, isActive }) => {
    const { menu } = this.props;
    return (
      <FullTab
        isActive={isActive}
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    )
  }

  switchScreen = newTab => {
    const { changeTab } = this.props
    changeTab(newTab.key);
  }

  defineScreen = () => {
    const { activeTab } = this.props.menu
    switch(activeTab) {
      case 0:
        return <NoticiasConnected />
      case 1:
        return <User />
      default:
        return <NoticiasConnected />
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.defineScreen()}
        </View>
        <BottomNavigation
          onTabPress={this.switchScreen}
          renderTab={this.renderTab}
          tabs={this.props.menu.tabs}
        />
      </View>
    )
  }
}

const mapState = state => {
  return {
    menu: state.menuReducer
  }
}

const mapDispatch = dispatch => {
  return {
    changeTab: tab => dispatch(changeMenuTabMenuBottom(tab))
  }
}

export const TabNavigatorConnect = connect(mapState, mapDispatch)(withNavigation(TabNavigator));
