import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



export const commonStyles = StyleSheet.create({

    modeLight: {
        flex: 1,
        backgroundColor: "#FFFF",
        justifyContent: "center",
        padding: 10,
        
   

    
    },

    modeDark: {
        flex: 1,
        backgroundColor: "black",
        color:"white" ,
        justifyContent: "center",
        padding: 10,

        
    },


    cardDark: {
        borderColor: "#3A3A3A",
        borderRadius: 7,
        borderWidth: 2,
        width: 300 ,
        backgroundColor: "#1E1E1E"
    },

    cardLigth: {
        borderColor:  "#D1D5DB",
        borderRadius: 7,
        borderWidth: 2,
        width: 300,
        backgroundColor : "#F9FAFB"
    },


    buttonDark: {
        borderRadius: 3,
        borderWidth: 2,
        padding: 7,
        width: 100,
        borderColor: "#3A3A3A",
        backgroundColor: "#1E1E1E",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonLigth: {
        borderRadius: 3,
        borderWidth: 2,
        width: 100,
        padding: 7,
        borderColor: "#D1D5DB",
        backgroundColor: "#F9FAFB",
        justifyContent: "center",
        alignItems: "center"
    }

    
})