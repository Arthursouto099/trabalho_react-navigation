import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreens() {
  return (

    <SafeAreaView style={styles.container}>
    <View>
    <TouchableOpacity onPress={() => alert('')}   style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginTop: 400 }}>
        <Text>Editar Perfil</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
text: {
    color: "#0000",
    fontSize: 14,
},
container: {
backgroundColor: "#ffffffff",
flex: 1,

}

})