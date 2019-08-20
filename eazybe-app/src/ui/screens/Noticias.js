import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import ButtonNewPost from '../components/noticias/ButtonNewPost/ButtonNewPost';
import { TabNavigatorConnect } from '../../navigator/TabNavigator/TabNavigator'
import colors from '../colors/colors.enum'

//const styles = {
  //flex1: { flex: 1, backgroundColor: colors.bgContent },
  //flex10: { flex: 10 }
//}
const styles = StyleSheet.create({
  flex1: { flex: 1 },
  flex10: { flex: 11, height: '100%' },
  btnNewPost: { position: 'absolute', right: 0, bottom: 0 },
  
})

class Noticias extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    headerLeft: null,
    title: 'Notícias'
  }

  render() {
    return (
      <View style={styles.flex1}>
        
        <View style={styles.flex10}>
          <ScrollView>
            <Text>Scroll</Text>
          </ScrollView>
          <View style={styles.btnNewPost}>
            <ButtonNewPost onPress={() => this.props.navigation.navigate('NewPost')} />
          </View>
        </View>
        <View style={styles.flex1}>
        <TabNavigatorConnect />
        </View>
      </View>
    );
  }
}

export default withNavigation(Noticias)
