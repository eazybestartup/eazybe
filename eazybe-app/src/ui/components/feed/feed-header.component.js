import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment'
import localization from 'moment/locale/pt-br'  
moment.locale('pt-br')
const today = moment(new Date(), "YYYY-MM-DD HH:mm:ss")

const styles = StyleSheet.create({
    container: { display: 'flex', flexDirection: 'column', marginBottom: 30, marginTop: 30 },
    userWelcome: { fontFamily: 'ComfortaaBold', fontSize: 24, color: '#EF5B5C' },
    phrase: { fontSize: 16, color: '#4a4a4a' }
})

const FeedHeader = ({
    title, titleColor, phrase
}) => (
    <View style={styles.container}>
        <Text>{`${today.format('dddd').toUpperCase()}, ${today.format('D MMMM').toUpperCase()}`}</Text>
        { title ? <Text style={[styles.userWelcome, { color: titleColor }]}>{title}</Text> : null }
        <Text style={styles.phrase}>{phrase}</Text>
    </View>
);

export default FeedHeader;
