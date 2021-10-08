import React,{Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    AsyncStorage,
    TouchableOpacity,
    ImageBackground,
    Image
} from "react-native";
import {
    ToastAndroid,
    Platform,
    AlertIOS,
  } from 'react-native';
import axios from "axios";
import { icons, COLORS, SIZES, FONTS, images } from '../constants'
import LinearGradient from 'react-native-linear-gradient';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:''
         }
    }


    ComponentDidMount(){
        this.loading().done();
    }
    loading = async() =>{
        var value = await AsyncStorage.getItem('user');
        if(value !=null){
            this.props.navigation.navigate('Home');
        }
    }


    
    render() { 
        return ( 
            
            <View style={ styles.container }>
                          <ImageBackground  source={images.Login_Image} resizeMode="cover" style={styles.image}> 
  

            <View>
            <KeyboardAvoidingView behavior='padding'>
            <View>
                
                <View>
                
                    <View style={{
                            padding: SIZES.padding3 * 2,
                            alignItems: 'center',
                            marginTop:50,
                            justifyContent: 'center'
                        }}>           
                    <TextInput style={{
                              width: SIZES.width * 0.74,
                                padding: SIZES.padding2,
                                backgroundColor: COLORS.lightGray2,
                                borderColor:COLORS.black,
                                alignItems: 'center',
                            }}
                        placeholder='username'
                        onChangeText={(username) => this.setState({username})}
                        underlineColorAndroid='transparent'
                    ></TextInput>
                    </View>
                    <View                          style={{
                            padding: SIZES.padding3 * 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                    <TextInput             style={{
                                                 width: SIZES.width * 0.74,
                                padding: SIZES.padding2,
                                backgroundColor: COLORS.lightGray2,
                                borderColor:COLORS.black,
                                alignItems: 'center',
                            }}
                        placeholder='password'
                        onChangeText={(password) => this.setState({password})}
                        underlineColorAndroid='transparent'
                    ></TextInput>
                    </View>
                        <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            marginTop:15,
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: SIZES.width * 0.74,
                                padding: SIZES.padding2,
                                borderRadius:15,
                                backgroundColor: COLORS.DarkRed,
                                alignItems: 'center'
                            }}
                            onPress={this.login}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                 
                </View>
                </View>
            </KeyboardAvoidingView>
           
            </View>

            <View>
            <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginTop:160,
                                width: SIZES.width * 0.74,
                                padding: SIZES.padding2,
                                backgroundColor: COLORS.DarkRed,
                                alignItems: 'center',
                                borderRadius:15,
                            }}
                            onPress={this.Register}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Register</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            </ImageBackground>
               
         
         
            </View>

         );
    }

    Register=()=>{
        this.props.navigation.navigate('Register');
    }

    login=()=>{

        const data= {
            Email :this.state.username,
            Password: this.state.password
        }


        axios.post('http://10.0.2.2:8070/auth/login',data)
            .then((res) => {
                if (Platform.OS === 'android') {
                    ToastAndroid.show("Success", ToastAndroid.SHORT)
                    this.props.navigation.navigate('Home');
                  } else {
                    AlertIOS.alert("Success"); 
                    this.props.navigation.navigate('Home');
                  }
            }) 

            .catch((err) => {
                console.log(err);
              });
    }




}
const styles = StyleSheet.create({
 
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center",
      },

});
export default Login;