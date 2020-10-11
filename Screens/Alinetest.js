import React, { Component } from 'react';
import {
    StyleSheet, TextInput, Text, View,
    Alert, TouchableOpacity, StatusBar
} from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cccc00',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 50
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 1
    },
    button: {

    }
});

export default class Alinetest extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this)
    }
    onPress() {
        Alert.alert('ddang lick')
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />                
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text>Nhập Account</Text>
                    <TextInput style={styles.input} />
                    <TouchableOpacity onPress={this.onPress} activeOpacity={0.5} style={styles.button}>
                        <Text>Đo Kiểm</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 6, flexDirection: 'row' }}></View>
            </View >
        );
    }
}   