import FavoriteAsset from "../asset/FavoriteAsset";
import HomeAsset from "../asset/HomeAsset";
import MenuAsset from "../asset/MenuAsset";
import QrAsset from "../asset/QrAsset";
import TourAsset from "../asset/TourAsset";

export const menuItems = [
  { icon: <HomeAsset />, title: "home", url: "/home" },
  { icon: <TourAsset />, title: "tour", url: "/tour" },
  { icon: <QrAsset />, title: "qr", url: "/qr" },
  { icon: <FavoriteAsset />, title: "favorite", url: "/fav" },
  { icon: <MenuAsset />, title: "menu", url: "/menu" },
];
