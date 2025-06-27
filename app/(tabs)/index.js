import { NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FinalScreen from '../../screens/FinalScreen';
import HomeScreen from '../../screens/HomeScreen';
import QuestionScreen from '../../screens/QuestionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1f1f1f',
          },
          headerTintColor: '#f1f1f1',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ title: '🏠 Home' }}
          children={(props) => <HomeScreen {...props} />}
        />

        <Stack.Screen
          name="Quiz"
          options={{ title: '🧠 Quiz Time' }}
          children={(props) => <QuestionScreen {...props} />}
        />

        <Stack.Screen
          name="Final"
          options={{ title: '🏁 Result' }}
          children={(props) => <FinalScreen {...props} />}
        />
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}
