import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../screens/screens_flight/Screen1'
import Screen2 from '../screens/screens_flight/Screen2'
import Screen3 from '../screens/screens_flight/Screen3'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Screen1" component={Screen1} options={{title: 'Screen 1'}}/>
      <Stack.Screen name="Screen2" component={Screen2} options={{title: 'Screen 2'}}/>
      <Stack.Screen name="Screen3" component={Screen3} options={{title: 'Screen 3'}}/>
    </Stack.Navigator>
  );
}
export default MyStack;