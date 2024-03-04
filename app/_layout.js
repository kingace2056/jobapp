import { Stack } from "expo-router";
import React from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

let customFonts = {
  "DMSans-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
  "DMSans-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
  "DMSans-Regular": require("../assets/fonts/DMSans-Regular.ttf"),
};
export default class Layout extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return <Stack />;
  }
}
