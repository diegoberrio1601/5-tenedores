import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { RestaurantScreen } from "../screens/RestaurantsScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/AccountScreen";
import {Screen} from "../utils"

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ( { color, size } ) => tabBarIconOptions(route, color, size  )
    })}>
      <Tab.Screen name={Screen.restaurant.tab} component={RestaurantScreen} options={{title: "Restaurantes"}}/>
      <Tab.Screen name={Screen.favorites.tab} component={FavoritesScreen} options={{title: "Favoritos"}}/>
      <Tab.Screen name={Screen.ranking.tab}component={RankingScreen} options={{title: "Ranking"}}/>
      <Tab.Screen name={Screen.search.tab} component={SearchScreen} options={{title: "Buscador"}}/>
      <Tab.Screen name={Screen.account.tab} component={AccountScreen} options={{title: "Cuenta"}}/>
    </Tab.Navigator>
  );
}

function tabBarIconOptions(route, color, size) {
    let iconName
    if (route.name === Screen.restaurant.tab) {
        iconName = "compass-outline"
    }
    if (route.name === Screen.favorites.tab)  {
        iconName = "heart-outline"
    }
    if (route.name === Screen.ranking.tab) {
        iconName = "star-outline"
    }
    if (route.name === Screen.search.tab) {
        iconName = "magnify"
    }
    if (route.name === Screen.account.tab) {
        iconName = "home-outline"
    }

    return (
        <Icon type="material-community" name={iconName} color={color} size={size}/>
    )
}