import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screen/Home/Home';
import Profile from '../../screen/Profile/Profile';
import Marketplace from '../../screen/Marketplace/Marketplace';
import { COLORS } from '../../common/theme';
import Icon from '../../common/Icon';
import color from '../../common/color';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type={"AntDesign"}
                name="home"
                size={25}
                color={focused ? color.gold : color.Offwhite}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Marketplace"
          component={Marketplace}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type={"Entypo"}
                name="shop"
                size={25}
                color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (

              <View style={[styles.PopContainer,   {backgroundColor: focused ? color.Offwhite : "transparent"}]} >
                <Icon
                  type={"FontAwesome"}
                  name="user"
                  size={25}
                  color={focused ? color.MAINCOLOUR : COLORS.primaryLightGreyHex}
                />
              </View>

            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // tabBarStyle: {
  //   height: 65,
  //   position: 'absolute',
  //   // backgroundColor: color.MAINCOLOUR,
  //   backgroundColor: "rgba(14, 2, 69, 0.66)",
  //   // borderTopWidth: 0,
  //   elevation: 3,
  //   borderRadius: 16,
  //   overflow: 'hidden',
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 3 },
  //   shadowOpacity: 0.27,
  //   shadowRadius: 4.65,
  //   bottom:10,
  //   width:"90%",
  //   left:20
  // },


  tabBarStyle: {
    height: 65,
    position: 'absolute',
    backgroundColor: "rgba(14, 2, 69, 0.9)", // Keeping the transparency
    elevation: 0, // Remove elevation to avoid shadow
    borderTopWidth: 0, // Ensure no top border
    borderRadius: 16,
    bottom: 10,
    width: "90%",
    left: 20,
    shadowColor: "transparent", // Remove shadow
    paddingHorizontal: 0, // Remove any potential padding
    overflow: 'hidden',
  },


  PopContainer: {
  
    height: 30, width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }

});

export default BottomNavigator;
