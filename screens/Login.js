import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    StatusBar
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import { CustomButton } from '../componenets';
import {images,SIZES,COLORS,FONTS} from "../constants"

const Login = ({ navigation }) => {

    const renderHeader = () => {
        return(
            <View style={loginstyle.headerView}>
                <ImageBackground source={images.loginBackground} style={loginstyle.headerImgBG}>
                    <LinearGradient style={loginstyle.lienarFade} start={{x: 0, y:0}} end={{x:0,y:1}} colors={[COLORS.transparent,COLORS.black]}>
                        <Text style={loginstyle.linearFadeText}>Cooking Delicious Food Easily</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    const renderDetail = () => {
        return(
            <View style={loginstyle.detailView}>
                <Text style={loginstyle.detailText}>Discover More than 1000+ recipies in your hand and cook it easily!</Text>
                <View style={loginstyle.buttonCotainer}>
                    <CustomButton buttonText={"Login"} buttonContainerStyle={loginstyle.buttonContainer1} colors={[COLORS.darkGreen, COLORS.lime]} onPress={() => navigation.navigate("Home")} />
                    <CustomButton buttonText={"Sign Up"} buttonContainerStyle={loginstyle.buttonContainer2} colors={[]} onPress={() => navigation.navigate("Home")} />
                </View>
            </View>
        )
    }
    return (
        <View style={loginstyle.mainView}>
            <StatusBar barStyle='light-content'/>
            {renderHeader()}
            {renderDetail()}
        </View>
    )
}

export default Login;

const loginstyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.black
    },
    headerView: {
        height: SIZES.height> 700? "65%":"60%"
    },
    headerImgBG: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    linearFade: {
        height: 200,
        justifyContent: 'flex-end',
    },
    linearFadeText:{
        width: "80%",
        color: COLORS.white,
        ...FONTS.largeTitle,
        lineHeight: 45,
        marginLeft: 24,
        fontWeight: '900'
    },
    detailView: {
        flex: 1,
        paddingHorizontal: SIZES.padding
    },
    detailText:{
        marginTop: SIZES.radius,
        width: '70%',
        color: COLORS.gray,
        ...FONTS.body3,
    },
    buttonCotainer:{
        flex:1,
        justifyContent: 'center'
    },
    buttonContainer1: {
        paddingVertical: 18,
        borderRadius: 20
    },
    buttonContainer2: {
        marginTop: SIZES.radius,
        paddingVertical: 18,
        borderRadius: 20,
        borderColor: COLORS.dark
    }
})