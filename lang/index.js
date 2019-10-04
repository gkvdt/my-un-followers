import * as Localization from "expo-localization";
import i18n from "i18n-js";

const en = {
  login: "Login",
  username: "Username",
  password: "Password",
  subtitle: "With Your Accound",
  following: "Following",
  profile: "Profile",
  remember: "Remember username and password",
  unfollow: "Unfollow",
  logout: "Logout",
  unf_error: "Something went wrong.. Please try again later."
};
const tr = {
  login: "Giriş",
  username: "Kullanıcı Adı",
  password: "Şifre",
  subtitle: "",
  following: "Takip",
  profile: "Profil",
  remember: "Bilgilerimi Hatırla",
  unfollow: "Çıkar",
  logout: "Çıkış",
  unf_error: "Bişeyler ters gitti.. Daha sonra deneyiniz. "
};
i18n.fallbacks = true;
i18n.translations = { en, tr };
i18n.locale = Localization.locale;

export default lang = val => {
  return i18n.t(val);
};
