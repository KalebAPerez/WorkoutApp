import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import WorkoutView from './Views/workout';

const Tab = createBottomTabNavigator();

const NutritionScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nutrition Screen</Text>
    </View>
  );
};

const WellnessScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Wellness Screen</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Fitness"
        screenOptions={{
          headerShown: false,  // This line hides the header
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: 'purple',
            borderTopWidth: 2,
            borderTopColor: 'black',
          },
        }}
      >
        <Tab.Screen name="Muscles" component={WorkoutView} />
        <Tab.Screen name="Mind" component={NutritionScreen} />
        <Tab.Screen name="Munchies" component={WellnessScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
