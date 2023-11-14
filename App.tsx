import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './src/navigator/Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MealsScreen } from './src/meals/MealsScreen';
import { HomeScreen } from './src/home/HomeScreen';

const Tab = createBottomTabNavigator<TabRoutes>()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        <Tab.Screen name='Meals' component={MealsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({

})