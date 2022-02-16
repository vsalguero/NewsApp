/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import All from './src/screens/All';
import Business from './src/screens/Business';
import HealthScreen from './src/screens/Health';
import SportsScreen from './src/screens/Sports';
import TechScreen from './src/screens / Tech';

import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="All"
          component={All}
          options={{
            tabBarIcon: props => (
              <Icon type="feather" name="home" color={props.color} />
            ),
          }}
        />

        <Tab.Screen
          name="Business"
          component={Business}
          options={{
            tabBarIcon: props => (
              <Icon type="feather" name="dollar-sign" color={props.color} />
            ),
          }}
        />

        <Tab.Screen
          name="Health"
          component={HealthScreen}
          options={{
            tabBarIcon: props => (
              <Icon type="feather" name="heart" color={props.color} />
            ),
          }}
        />

        <Tab.Screen
          name="Sports"
          component={SportsScreen}
          options={{
            tabBarIcon: props => (
              <Icon
                type="ionicon"
                name="tennisball-outline"
                color={props.color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Tech"
          component={TechScreen}
          options={{
            tabBarIcon: props => (
              <Icon
                type="ionicon"
                name="hardware-chip-outline"
                color={props.color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
