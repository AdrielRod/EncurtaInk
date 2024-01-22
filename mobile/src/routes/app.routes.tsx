import AnimatedBar from "../components/animations/BottomBar/AnimatedBar";
import Favorites from "../screens/Favorites/Favorites";
import Home from "../screens/Home/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Bottom = createBottomTabNavigator()

type AntDesignIconNames = 'home-outline' | 'bookmark-outline';

export default function RoutesApp() {
    return (
        <Bottom.Navigator
        tabBar={props => <AnimatedBar {...props}/>}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Bottom.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'home-outline' as AntDesignIconNames
                }}
            />
            <Bottom.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: 'bookmark-outline' as AntDesignIconNames
                }}
            />
        </Bottom.Navigator>
    )
}