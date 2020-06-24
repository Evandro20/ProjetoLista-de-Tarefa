import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler'

const Tarefa = () => {
    return (
        <View style={styles.container}>
            <Text style = {styles.textoBemVindo}>Olá, Seja Bem-Vindo</Text>
            <Text style = {{textAlign: 'center', fontSize: 17}}>Aqui estão suas Tarefas!</Text>
            <View style = {{flex: 1}}>
                <TextInput style = {styles.textoAdicionarTarefa}
                placeholder = '  Adicione aqui as suas tarefas'
                />
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
                <View style = {styles.caixaDeTarefas}>
                </View>
                <TouchableOpacity style = {styles.buttonexit}>
                    <Text style = {styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Tarefa

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E07A5F',
    },
    textoBemVindo: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 30
    },
    textoAdicionarTarefa: {
        alignSelf: 'center',
        backgroundColor: '#F4F1DE',
        marginTop: 12,
        marginBottom: 10,
        width: '90%',
        height: '7%',
        borderRadius: 5  
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#81B29A',
        width: '90%',
        height: '7%',
        shadowColor: "#000",
        borderColor: '#000000',
        borderWidth: 2,
        marginTop: 10,
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
        textAlign: 'center',
        fontSize: 18,
        color: '#000000',
    },
    caixaDeTarefas: {
        flex: 1,
        backgroundColor: '#FDFFFC',
        marginTop: 30,
        width: '90%',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        alignSelf:'center'
    },
    buttonexit: {
        alignSelf:'center',
        backgroundColor: '#81B29A',
        width: '90%',
        height: '7%',
        shadowColor: "#000",
        borderColor: '#000000',
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 10,
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