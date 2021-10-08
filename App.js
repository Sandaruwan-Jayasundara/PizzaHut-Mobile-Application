import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { Restaurant, OrderDelivery } from './screens'
import  Register  from './screens/Register'
import  Cart  from './screens/Cart'
import  Address  from './screens/Address'
import Tabs from './navigation/tabs'
import  Payment  from './screens/Payment'
import  Login  from './screens/Login'
import  Home  from './screens/Home'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                // initialRouteName={'Login'}
                initialRouteName={'Home'}
            >



                <Stack.Screen name="My Tasks" component={Tabs} />
                {/* <Stack.Screen name="Home" component={Tabs} /> */}
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Address" component={Address} />
                <Stack.Screen name="Payment" component={Payment} />
 
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;