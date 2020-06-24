import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import 'react-native-gesture-handler'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.texto}>Login</Text>
            </View>
            <TextInput style={styles.entradaDeTexto}
                placeholder='  Digite aqui seu E-mail'
                placeholderTextColor='black'
            />
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}
                onPress = {() => {navigation.navigate('CADASTRO')}}
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E07A5F',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    entradaDeTexto: {
        borderWidth: 1,
        borderColor: 'black',
        height: "7%",
        width: "90%",
        backgroundColor: '#F4F1DE',
        marginVertical: 7,
        borderRadius: 5,

    },
    containerButton: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        backgroundColor: '#81B29A',
        width: 150,
        height: 50,
        shadowColor: "#000",
        borderColor: '#000000',
        borderWidth: 2,
        marginTop: 20,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 10
    },
    buttonText: {
        textAlign: "center",
        fontSize: 18,
        color: '#000000',
    },
    button2: {
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        backgroundColor: '#F2CC8F',
        width: 150,
        height: 50,
        shadowColor: "#000",
        borderColor: '#000000',
        borderWidth: 2,
        marginTop: 20,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 10
    },
})