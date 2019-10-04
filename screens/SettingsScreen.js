import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Admob from "../constants/Admob";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from "expo-ads-admob";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={this.bannerError}
      />
      <TouchableOpacity onPress={() => loadAd()}>
        <Text>load banner</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

loadAd = async () => {};
