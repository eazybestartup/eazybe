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

class TabNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const { menu } = this.props;
    if (menu.lastTab !== menu.activeTab) {
      this.props.navigation.navigate(menu.tabs[menu.activeTab].key);
    }
  }

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color={"white"} type="font-awesome" name={icon} />
  )

  renderTab = ({ tab, isActive }) => {
    const { menu } = this.props;
    return (
      <FullTab
        isActive={false}
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

  render() {
    return (
      <View>
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
