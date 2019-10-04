import { AdMobInterstitial } from "expo-ads-admob";
import Admob from "../constants/Admob";
export default loadAd = async () => {
  AdMobInterstitial.setAdUnitID(Admob.interstitialId); // Test ID, Replace with your-admob-unit-id
  AdMobInterstitial.setTestDeviceID("EMULATOR");
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  await AdMobInterstitial.showAdAsync();
};
