import React from 'react'
import { View,Image,Text, StyleSheet } from 'react-native'
import { COLORS } from '../constants'

export default function TabIcon({focused, icon}) {
    const TabIconStyle = StyleSheet.create({
        tabview: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            width: 50
        },
        img: {
            width: 30,
            height: 30,
            tintColor: focused? COLORS.darkGreen: COLORS.lightLime
        },
        focusedStyle: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: COLORS.darkGreen
        }
    })
  return (
    <View style={TabIconStyle.tabview}>
        <Image source={icon} resizeMode='contain' style={TabIconStyle.img} />
        {focused && <View
        style={TabIconStyle.focusedStyle}>
        </View>}
    </View>
  )
}
