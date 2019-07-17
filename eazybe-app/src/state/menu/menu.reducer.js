import {
  CHANGE_TAB_MENU_BOTTOM,
} from './menu.actionTypes';
import colors from '../../ui/colors/colors.enum'

const INITIAL_STATE = {
  activeTab: 0,
  lastTab: undefined,
  tabs: [
    {
      key: 'Noticias',
      icon: 'rss-square',
      label: 'Notícias',
      barColor: colors.navyBlue,
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'User',
      icon: 'user',
      label: 'Você',
      barColor: colors.navyBlue,
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]
};


const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TAB_MENU_BOTTOM:
      if (state.activeTab === action.tab) {
        return { ...state };
      }
      const index = state.tabs.findIndex(tab => tab.key === action.tab);
      return { ...state, lastTab: state.activeTab, activeTab: index }
    default: 
      return { ...state };
  }
};

export default menuReducer;
