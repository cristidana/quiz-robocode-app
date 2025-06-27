import { NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import QuestionScreen from '../../screens/QuestionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props}/>
          )}
        </Stack.Screen>

        <Stack.Screen name="Quiz">
          {(props) => (
            <QuestionScreen {...props}/>
          )}
        </Stack.Screen>
    
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}
