import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/home/HomeScreen';
import { Routes } from './src/navigator/Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MealsScreen } from './src/meals/MealsScreen';

const Tab = createBottomTabNavigator<Routes>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        <Tab.Screen name='Meals' component={MealsScreen} />
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