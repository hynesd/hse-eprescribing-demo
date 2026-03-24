import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PrescriptionsLandingScreen from '../screens/PrescriptionsLandingScreen';
import ReadyForDispensingScreen from '../screens/ReadyForDispensingScreen';
import DispensedScreen from '../screens/DispensedScreen';
import RepeatPrescriptionsScreen from '../screens/RepeatPrescriptionsScreen';
import NominatedPharmacyScreen from '../screens/NominatedPharmacyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import theme from '../theme';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const PrescriptionsStack = createNativeStackNavigator();

function PrescriptionsNavigator() {
  return (
    <PrescriptionsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.white },
        headerTitleStyle: { color: theme.colors.black, fontWeight: '700' },
        headerTintColor: theme.colors.darkGreen,
      }}
    >
      <PrescriptionsStack.Screen
        name="PrescriptionsLanding"
        component={PrescriptionsLandingScreen}
        options={{ headerShown: false }}
      />
      <PrescriptionsStack.Screen
        name="ReadyForDispensing"
        component={ReadyForDispensingScreen}
        options={{ title: 'Ready for Dispensing' }}
      />
      <PrescriptionsStack.Screen
        name="Dispensed"
        component={DispensedScreen}
        options={{ title: 'Dispensed Prescriptions' }}
      />
      <PrescriptionsStack.Screen
        name="RepeatPrescriptions"
        component={RepeatPrescriptionsScreen}
        options={{ title: 'Repeat Prescriptions' }}
      />
    </PrescriptionsStack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: React.ComponentProps<typeof Ionicons>['name'];

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Prescriptions') {
            iconName = focused ? 'medical' : 'medical-outline';
          } else if (route.name === 'MyPharmacy') {
            iconName = focused ? 'storefront' : 'storefront-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.darkGreen,
        tabBarInactiveTintColor: theme.colors.tertiaryGrey,
        tabBarStyle: {
          borderTopColor: theme.colors.lightGray,
          backgroundColor: theme.colors.white,
          paddingBottom: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        headerStyle: { backgroundColor: theme.colors.white },
        headerTitleStyle: { color: theme.colors.black, fontWeight: '700' },
        headerTintColor: theme.colors.darkGreen,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitle: 'HSE Health App',
          headerTitleStyle: {
            color: theme.colors.darkGreen,
            fontWeight: '800',
            fontSize: theme.fontSize.regular,
          },
        }}
      />
      <Tab.Screen
        name="Prescriptions"
        component={PrescriptionsNavigator}
        options={{ headerShown: false, title: 'Prescriptions' }}
      />
      <Tab.Screen
        name="MyPharmacy"
        component={NominatedPharmacyScreen}
        options={{ title: 'My Pharmacy', headerTitle: 'My Nominated Pharmacy' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile', headerTitle: 'My Profile' }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Main" component={MainTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
