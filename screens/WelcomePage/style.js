import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#81BF9F',
        alignItems:'center', 
        justifyContent:'center', 
        flex:1,
    },
    image: {
        top: -50,
        marginTop: 40,
        height: "45%",
        borderRadius: 40
    },
    welcomeHeaderText: {
        fontFamily: 'PlayfairDisplay_400Regular',
        fontSize: 57,
        marginTop: 15,
        top: -50,
        color: "white"
    },
    welcomeDescriptionText: {
        fontFamily: 'Nobile_400Regular',
        fontSize: 16,
        marginTop: 15,
        marginLeft: "30%",
        width: '80%',
        top: -50,
        color: "white"
    },
    joinNowButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2D2A29',
        borderRadius: 10,
        width: 346,
        height: 51,
        marginTop: 40,
        top: -50,
        backgroundColor: "white"
    },
    joinNowButtonText: {
        fontFamily: 'Nobile_400Regular',
        fontSize: 20,
        color: 'black'
    },
    haveAccountText: {
        fontFamily: 'Nobile_400Regular',
        color: 'white',
        fontSize: 16
    },
    loginText: {
        fontFamily: 'Nobile_700Bold',
        color: 'white',
        fontSize: 16
    }
})