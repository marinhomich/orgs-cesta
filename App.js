import {StatusBar, SafeAreaView, View} from 'react-native';
import Cesta from "./src/pages/cesta";

export default function App() {
  return (
    <SafeAreaView>
     <View>
         <StatusBar/>
         <Cesta/>
     </View>
    </SafeAreaView>
  );
}
