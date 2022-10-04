import React, { useState } from 'react';
import { Text, View,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
const dbuser = {name:'admin',password:'admin'}


const LoginView = ({
    params,
}) => {

    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [user,setUser] = React.useState({});
    const validCheck = () => {
        if(username === dbuser.name && password === dbuser.password)
        {
            console.log("True");
        }
     }
    return(
    <View style={styles.containerLogin}>
        <View style = {styles.containerHeader}>
            <Ionicons name="person" color="#FFFF" size={50}/>
        </View>
        <Text style={{fontSize: 20, fontWeight:"bold"}}>Sign In</Text>
        <View style = {styles.containerForm}>
            <View style ={styles.inputForm}>
                    <Ionicons name="person-circle" size={40}/>
                    <TextInput placeholder='username' style={styles.inputText} onChangeText={(e) =>{
                        setUsername(e);
                    }} />
            </View>
            <View style ={styles.inputForm}>
                <Ionicons  name="lock-closed" size={40}></Ionicons>
                <TextInput placeholder='password' secureTextEntry='true' style={styles.inputText} onChangeText= {(e)=>{
                    setPassword(e);

            }}/>
            </View>

            <TouchableOpacity style={styles.btn} onPress={()=>
                {
                    validCheck();
                }
                }>
                <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
        </View>
    </View>
);
}

export default LoginView;

const styles = StyleSheet.create({
    containerLogin:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    containerHeader:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#d81b60',
        height:100,
        width:100,
        borderRadius:100/2
    },
    text:{
        fontSize:20,
        marginTop:10,
    },
    containerForm:{
        width:'80%',
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center'
    },
    inputForm:{
        marginVertical:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    inputText:{
        borderBottomColor:'#d81b60',
        borderBottomWidth:2,
        fontSize:20,
    },
    btnText:{
        fontSize:20,
    },
    btn:{
        backgroundColor:'#d81b60',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        marginTop:10,
        width:'60%'
    },
});
