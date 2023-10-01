import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import SpecificationsScreen from './screens/SpecificationsScreen';
import SellerInfoScreen from './screens/SellerInfoScreen';
import UserCommentsScreen from './screens/UserCommentsScreen';
import UserQuestionsScreen from './screens/UserQuestionsScreen';
import AppInfoScreen from './screens/AppInfoScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="ProductList">
    <Stack.Screen name="ProductList" component={ProductListScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    <Stack.Screen name="Specifications" component={SpecificationsScreen} />
    <Stack.Screen name="SellerInfo" component={SellerInfoScreen} />
    <Stack.Screen name="UserComments" component={UserCommentsScreen} />
    <Stack.Screen name="UserQuestions" component={UserQuestionsScreen} />
    <Stack.Screen name="AppInfo" component={AppInfoScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={MainStack} />
        <Drawer.Screen name="AppInfo" component={AppInfoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
