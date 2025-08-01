import { useFonts } from "expo-font";
import HomeScreen from "./src/screens/HomeScreen";
import PaymentScreen from "./src/screens/PaymentScreen";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Montserrat-Regular": require("./src/assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
        "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    });

    if (!fontsLoaded) return null;

    return <PaymentScreen />;
}
