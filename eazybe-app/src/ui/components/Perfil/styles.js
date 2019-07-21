import { StyleSheet } from 'react-native'
import colors from '../../colors/colors.enum'

export const styles = StyleSheet.create({
    areaImgPerfil: {
        height: 180,
        backgroundColor: colors.bgContent
    },
    bgImage:{
        width: 150,
        height: 150,
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
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
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
        height: 200,
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
        marginTop: 15,
        marginLeft: 24,
        width: 30,
        height: 30
    },
    txtEnd:{
        marginTop: 15,
        marginLeft: 24,
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 18
    },
    bntEdit:{
        width: 109,
        height:30,
        alignSelf: 'flex-end',
        marginEnd: 20,
        marginTop: 20,
    },
    bntTxtEditar:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 35
    }
});