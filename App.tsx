import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabRoutes } from './src/navigator/Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MealsTab } from './src/meals/MealsTab';
import { HomeScreen } from './src/home/HomeScreen';

const Tab = createBottomTabNavigator<TabRoutes>()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: styles.tab, tabBarLabelStyle: styles.label, tabBarActiveTintColor: '#B1E3FA' }}>
        <Tab.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        <Tab.Screen options={{ headerShown: false, title: 'Meals' }} name='Meals Tab' component={MealsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'darkslategray'
  },
  label: {
    color: 'white'
  },
  icon: {
    color: 'white'
  }
})