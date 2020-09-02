import React from 'react';
import Home from './screens/Home';
import NewGame from './screens/NewGame';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from './components/Text';
import { useFonts, Quando_400Regular } from '@expo-google-fonts/quando';

const headerOptions = {
  headerTitleStyle: {
    fontFamily: 'Quando_400Regular'
  },
  headerStyle: {
    backgroundColor: 'lightblue'
  }
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('New Game')}
      >
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          ...headerOptions,
          title: 'Home'
        }}
      />
      <HomeStack.Screen
        name="New Game"
        component={NewGame}
        options={{
          ...headerOptions,
          title: 'New Game'
        }}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          ...headerOptions,
          title: 'Home',
        }}
      />
      <SettingsStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          ...headerOptions,
          title: 'Home',
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
        })}
        tabBar={(props) => {
          return <BottomTabBar {...props} style={{ backgroundColor: 'lightblue' }} />
        }}
        tabBarOptions={{
          activeTintColor: '#333333',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: 'Home'
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            title: 'Settings'
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
