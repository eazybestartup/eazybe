import React, { Component } from 'react';
import { Image, StyleSheet, Picker } from 'react-native';
import { Container, View, Text, Textarea, Button } from 'native-base';
import getText from '../../enums/dictionary/dictionary'
import { Icon } from 'react-native-elements';
import EazyBePicker from '../components/register/EazyBePicker/EazyBePicker'

const styles = StyleSheet.create({
  txtNewPost:{
    backgroundColor: colors.white,
    marginRight: 10,
    borderRadius: 5,
    fontSize: 14,
    height: '70%'
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  picker: { color: colors.navyBlue, backgroundColor: colors.white, flex: 1, zIndex: 1, marginRight: 10, borderRadius: 5, marginLeft: 10 },
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  vwContent: { flex: 3, backgroundColor: '#E6EBE3', paddingTop: 20 },
  vwContentHeader: { flex: 2, flexDirection: 'row' },
  vwContentHeaderImage: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  userImage: { width: 50, height: 50, borderRadius: 50 },
  userName: { fontSize: 12, fontWeight: 'bold', textAlign: 'center' },
  vwCategory: { flex:1, flexDirection: 'row', alignItems: 'flex-start', paddingLeft: 10 },
  txtCategory: {fontSize: 16, fontWeight: 'bold', textAlign:'center', paddingTop: 15 },
  vwBtnPublish: { flex:1, alignItems: 'center' },
  btnPublish: { alignSelf: 'flex-end', marginRight: 10, borderRadius:4, width: 100  }
});

const userImage = require('../../assets/NewPost/anonymous.png')
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['Post', 'Assalto'],
      choosenCategory: ''
    };
  }

  static navigationOptions = {
    headerLeft: null,
    title: 'Nova Postagem'
  }

  render() {
    return (
      <Container>
        <View style={styles.flex1}>
          <View style={styles.vwContent}>
            <View style={styles.vwContentHeader}>
              <View style={styles.flex1}>
                <View style={styles.vwContentHeaderImage}>
                  <Image 
                    source={userImage}
                    style={styles.userImage}
                  />
                </View>
                <View style={styles.flex1}>
                  <Text style={styles.userName}>{`${getText('newPost:user-mock')}`}</Text>
                </View>
              </View>

              <View style={styles.flex3}>
                <Textarea
                  rowSpan={5}
                  bordered
                  placeholder={`${getText("newPost:textarea:placeholder")}`}
                  style={[styles.txtNewPost,styles.shadow]}
                  />
              </View>
            </View>
            <View style={styles.flex3}>
              <View style={styles.vwCategory}>
                <Text style={styles.txtCategory}>{`${getText("newPost:label:category")}`}</Text>
                <Picker style={[styles.picker, styles.shadow]} selectedValue={this.state.choosenCategory} itemStyle={styles.flex1} onValueChange={value => this.setState({ choosenCategory: value })}>
                  {this.state.categories.map((item, key) => <Picker.Item key={key} label={item} value={item} />)}
                </Picker>
              </View>
              <View style={styles.vwBtnPublish}>
                <Button style={styles.btnPublish} onPress={() => this.props.navigation.navigate('NoticiasConnected')}>
                  <Text>{`${getText("newPost:label:publish")}`}</Text>
                </Button>
              </View>
            </View>
          </View>
          <View style={styles.flex2}></View>
        </View>
      </Container>
    );
  }
}

export default NewPost;
