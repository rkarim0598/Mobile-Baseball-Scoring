import React from 'react';
import Home from './screens/Home';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Quando_400Regular } from '@expo-google-fonts/quando';

const CustomText = (props) => <Text style={{ fontFamily: 'Quando_400Regular' }}>{props.children}</Text>
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText>Details!</CustomText>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText>Home screen</CustomText>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
      >
        <CustomText>Go to Details</CustomText>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomText>Settings screen</CustomText>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
      >
        <CustomText>Go to Details</CustomText>
      </TouchableOpacity>
    </View>
  );
}

const HomeStack = createStackNavigator(); function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitleStyle: {
            fontFamily: 'Quando_400Regular'
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          }
        }} 
      />
      <HomeStack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{
          title: 'Home',
          headerTitleStyle: {
            fontFamily: 'Quando_400Regular'
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          }
        }} 
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator(); function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          title: 'Home',
          headerTitleStyle: {
            fontFamily: 'Quando_400Regular'
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          }
        }} 
      />
      <SettingsStack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{
          title: 'Home',
          headerTitleStyle: {
            fontFamily: 'Quando_400Regular'
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          }
        }} 
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Quando_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName; if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? 'ios-list-box'
                : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })} tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen 
          name="Home" 
          component={HomeStackScreen}
          options={{
            title: 'Home',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Quando_400Regular'
            },
            headerStyle: {
              backgroundColor: 'lightblue'
            }
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsStackScreen}
          options={{
            title: 'Home',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Quando_400Regular'
            },
            headerStyle: {
              backgroundColor: 'lightblue'
            }
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
