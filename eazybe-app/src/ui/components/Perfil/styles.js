import { StyleSheet } from 'react-native'
import colors from '../../colors/colors.enum'

export const styles = StyleSheet.create({
    areaImgPerfil: {
        height: 180,
        backgroundColor: colors.bgContent
    },
    bgImage:{
        width: 148,
        height: 148,
        alignSelf: 'center',
    },
    iconeCam:{
        width:20,
        height:20,
        marginLeft: 5,
        marginEnd: 5
    },
    txtImgPerfil: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.black
    },
    txtUserPerfil:{
        color: colors.black,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    alignSelfEnd:{
        alignSelf: 'flex-end',
        height:30,
        backgroundColor: colors.transparent,
        borderColor: colors.bgContent,
        marginBottom: 5
    },
    alignSelfCenter:{
        alignSelf: 'center'
    },
    userInfo:{
        backgroundColor: colors.bgdadosUser,
        height: 240,
        marginTop: 10
    },
    txtDados:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        paddingLeft: 10,
        paddingTop: 10,
        color: colors.black
    },
    infoEnd_email:{
        flexDirection: 'row',
        marginTop: 5
    },
    imgEnd:{
        marginTop: 20,
        marginLeft: 24,
        marginRight: 20,
        width: 40,
        height: 40
    },
    imgMail:{
        marginTop: 15,
        marginLeft: 24,
        marginRight: 20,
        width: 40,
        height: 40
    },
    txtEnd:{
        marginTop: 10,
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 18,
        textAlignVertical:'top',
        width: 300
    },
    infoEndUser:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    userEdit:{
        backgroundColor: colors.bgdadosUser,
        height: 375,
        marginTop: 50,
    }
});