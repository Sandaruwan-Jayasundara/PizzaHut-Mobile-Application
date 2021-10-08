import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { icons, COLORS, SIZES, FONTS, images } from '../constants';
import SelectDropdown from 'react-native-select-dropdown'

import {
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
// import  Dropdown  from 'react-native-material-dropdown';


const Address = ({ route, navigation }) => {

  const Cities = ["Colombo", "Kandy", "Galle", "Anuradhapura","Jaffna"]
  const State = ["Western Province", "Central Province", "Southern Province"]

  const [BuyerName, setBuyerName] = useState();
  const [phone, setPhone] = useState();
  const [Street, setStreet] = useState();
  const [City, setCity] = useState();
  const [Province, SetProvince] = useState();
 


  function Address(){

    if(!BuyerName){
      ToastAndroid.show("Required Buyer Name", ToastAndroid.SHORT)
    }
    else if(!phone){
      ToastAndroid.show("Required Buyer Contact number", ToastAndroid.SHORT)
    }
    else if(!Street){
      ToastAndroid.show("Required Street", ToastAndroid.SHORT)
    }
    else if(!City){
      ToastAndroid.show("Required City", ToastAndroid.SHORT)
    }
    else if(!Province){
      ToastAndroid.show("Required State", ToastAndroid.SHORT)
    }
    else{
      
  
      navigation.navigate("Payment", {
        BuyerName:BuyerName,
        phone: phone,
        Street:Street,
        City:City,
        Province:Province
        })
    }



 

  }








    
  function renderHeader() {
    return (
        <View style={{  height: 50 , marginBottom:30, backgroundColor:'#E13340'}}>
            {/* <ImageBackground  source={images.Header} style={styles.image}> */}
            <View style={{ flexDirection: 'row', height: 50 }}>
            <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

            <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                        width: 280,
                    }}
                >
                    <Text style={{ ...FONTS.h3, color:COLORS.white, textAlign:'center'}}>Address</Text>
                </View>
            </View>

            <TouchableOpacity
                style={{
                   
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center',

                }}

                onPress={() => navigation.navigate("Cart")}
            >
                <Image
                    source={icons.basket}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        
                    }}
                />
            </TouchableOpacity>
            </View>
            {/* </ImageBackground> */}
        </View>
    )
}

function AddressBody() {


  return (
   
                    
                      
<KeyboardAvoidingView behavior='padding'>
<Text style={{ color: COLORS.darkgray, ...FONTS.h2, marginLeft:'auto', marginRight:'auto' ,marginTop:10,marginBottom:10}}>Please Enter Your Address</Text>
      
<View style={{
  backgroundColor:COLORS.white
}}>

             
 


<View style={{
  alignItems: 'center',
  justifyContent: 'center',
  }}>

<View>
<View style={{marginTop:20}} >




<Input
  onChangeText={text => setBuyerName(text)}
  placeholder='Buyer Name'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    /> 
  }
/>
</View>



<View   style={styles.ViewOfInput}>
<Input
onChangeText={text => setPhone(text)}
  placeholder='Contact'
  // leftIcon={
  //   <Icon
  //     name='email'
  //     size={24}
  //     color='black'
  //   /> 
  // }
/>
</View>



<View   style={styles.ViewOfInput}>
<Input onChangeText={text => setStreet(text)}
  placeholder='Street'
  // leftIcon={
  //   <Icon
  //     name='email'
  //     size={24}
  //     color='black'
  //   /> 
  // }
/>
</View>





<View   style={styles.ViewOfInput,{marginLeft:9}}>



<SelectDropdown
  buttonStyle={{
  backgroundColor: '#ffffff',
  borderBottomWidth: 1,
  width: SIZES.width * 0.84,
  }}
  buttonTextStyle={{color:COLORS.darkgray}}
	data={Cities}
  defaultButtonText=" Select City"
	onSelect={(selectedItem, index) => {
		setCity(selectedItem)
	}}
/>
</View>



<View   style={styles.ViewOfInput,{marginLeft:9,marginTop:20}}>

<SelectDropdown
  buttonStyle={{
  backgroundColor: '#ffffff',
  borderBottomWidth: 1,
  width: SIZES.width * 0.84,
  }}
  buttonTextStyle={{color:COLORS.darkgray,}}
	data={State}
  defaultButtonText="Province"
	onSelect={(selectedItem, index) => {
    SetProvince(selectedItem)
	}}
/>
</View>
<View>

  <View
  style={{
    marginTop:40,
    marginBottom:40
  }}
>

  <TouchableOpacity
      style={{
        width: SIZES.width * 0.9,
                          padding: SIZES.padding,
                          backgroundColor: "#E13340",
                          alignItems: 'center',
                          borderRadius: SIZES.radius,
          marginBottom:20,
        
      }}
      onPress={Address}
  >
      <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Continue</Text>
  </TouchableOpacity>
</View>

</View>


 

</View>
</View>

</View>
</KeyboardAvoidingView>

  );
}
return(
<SafeAreaView style={styles.container}>
{renderHeader()}
{AddressBody()}
</SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  rect1: {
    width: 315,
    height: 432,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 34,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 45,
    shadowOpacity: 0.3,
    shadowRadius: 15,
    marginTop: 40,
    marginLeft: 33
  },
  addAddress: {
    fontFamily: "roboto-regular",
    color: "rgba(235,30,17,1)",
    fontSize: 20,
    marginTop: 27,
    marginLeft: 98
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 190,
    fontSize: 16,
    height: 19,
    marginTop: 32,
    marginLeft: 32
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 190,
    fontSize: 16,
    height: 19,
    marginTop: 23,
    marginLeft: 32
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 190,
    fontSize: 16,
    height: 19,
    marginTop: 26,
    marginLeft: 32
  },
  textInput4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 190,
    fontSize: 16,
    height: 19,
    marginTop: 16,
    marginLeft: 32
  },
  textInput5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 190,
    fontSize: 16,
    height: 19,
    marginTop: 21,
    marginLeft: 32
  },
  textInput6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    backgroundColor:'gray',
    width: 190,
    fontSize: 16,
    height: 19,
    marginTop: 21,
    marginLeft: 32
  },
  button1: {
    width: 248,
    height: 30,
    marginTop: 36,
    marginLeft: 31
  },
  button2: {
    width: 248,
    height: 30,
    backgroundColor: "#ef463b",
    borderRadius: 22
  },
  addAddress2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 3,
    marginLeft: 67
  },
  button7: {
    width: 42,
    height: 42
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 42,
    height: 42,
    position: "absolute"
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(9,9,9,1)",
    fontSize: 40
  },
  ellipse1Stack: {
    width: 42,
    height: 42
  },
  button8: {
    width: 251,
    height: 42,
    marginLeft: 24
  },
  rect2: {
    width: 251,
    height: 42,
    backgroundColor: "#E6E6E6",
    borderRadius: 30,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 27,
    height: 27,
    width: 25
  },
  textInput7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    width: 192,
    height: 24,
    marginLeft: 2,
    marginTop: 2
  },
  icon2Row: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 17,
    marginTop: 7
  },
  button7Row: {
    height: 42,
    flexDirection: "row",
    marginTop: -515,
    marginLeft: 30,
    marginRight: 28
  },
  address: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 40
  },
  button9: {
    width: 52,
    height: 52,
    marginLeft: 112
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 52,
    height: 52,
    position: "absolute"
  },
  icon3: {
    top: 0,
    left: 11,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  ellipse2Stack: {
    width: 52,
    height: 52
  },
  addressRow: {
    height: 52,
    flexDirection: "row",
    marginTop: -100,
    marginLeft: 30,
    marginRight: 32
  },
  rect3: {
    width: 375,
    height: 70,
    backgroundColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 72,
    shadowOpacity: 1,
    shadowRadius: 24,
    flexDirection: "row",
    marginTop: 627
  },
  button14: {
    width: 39,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 2
  },
  rect8: {
    width: 39,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)"
  },
  image1: {
    width: 38,
    height: 38
  },
  button13: {
    width: 40,
    height: 43,
    marginLeft: 27
  },
  rect7: {
    top: 3,
    left: 0,
    width: 40,
    height: 38,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon7: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  rect7Stack: {
    width: 40,
    height: 43
  },
  button12: {
    width: 41,
    height: 43,
    marginLeft: 40,
    marginTop: 2
  },
  rect6: {
    top: 0,
    left: 0,
    width: 41,
    height: 41,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon6: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(239,70,59,1)",
    fontSize: 40
  },
  rect6Stack: {
    width: 41,
    height: 43
  },
  button11: {
    width: 30,
    height: 43,
    marginLeft: 38,
    marginTop: 2
  },
  rect5: {
    width: 30,
    height: 43,
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 43,
    width: 30
  },
  button10: {
    width: 40,
    height: 43,
    backgroundColor: "#fff",
    marginLeft: 30,
    marginTop: 2
  },
  rect4: {
    top: 7,
    left: 0,
    width: 40,
    height: 31,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  rect4Stack: {
    width: 40,
    height: 43
  },
  button14Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 30,
    marginTop: 7
  },
  image: {
    flex: 1,
    justifyContent: "center",
  }
});

export default Address;
