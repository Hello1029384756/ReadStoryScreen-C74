import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            summary: '',
        }
    }
    
    submitStory = () => {
        db.collection('stories').add({
            'title': this.state.title,
            'author': this.state.author,
            'summary': this.state.summary,
        })
        this.setState({
            title: '',
            author: '',
            summary: ''
        })
    }

    render() {
        return(
        <KeyboardAvoidingView>
            <View>
                <Text style={{textAlign: 'center', backgroundColor: "pink", paddingBottom: 20, paddingTop: 20}}>Story Hub</Text>
                <TextInput
                style={styles.textInput1}
                placeholder={"Story Name"}
                onChangeText= {(text)=>{
                    this.setState({
                        title: text
                    })
                }}
                value={this.state.title}/>
                <TextInput
                style={styles.textInput2}
                placeholder={"Author"}
                onChangeText= {(text)=>{
                    this.setState({
                        author: text
                    })
                }}
                value={this.state.author}/>
                <TextInput
                style={styles.textInput3}
                placeholder={"Summary"}
                onChangeText= {(text)=>{
                    this.setState({
                        summary: text
                    })
                }}
                value={this.state.summary}/>
                <TouchableOpacity style={styles.submit} onPress = {this.submitStory}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    textInput1: {
        borderWidth: 3, 
        marginTop: 130, 
        width: 450, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        textAlign: 'center'
    },
    textInput2: {
        borderWidth: 3, 
        marginTop: 100, 
        width: 450, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        textAlign: 'center'
    },
    textInput3: {
        borderWidth: 3, 
        marginTop: 100, 
        width: 450,
        height: 450, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        textAlign: 'center'
    },
    submit: {
        borderWidth:2,
        alignSelf: 'center',
        width:90,
        height: 33,
        marginTop:70,
        backgroundColor: "pink"
    },
    buttonText: {
        textAlign: 'center'
    }
})