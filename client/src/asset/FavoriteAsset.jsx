import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

export default function FavoriteAsset({ isSelected }) {
  return (
    <div className="w-full h-full">
      {isSelected ? (
        <MdFavorite size={"24"} />
      ) : (
        <MdOutlineFavoriteBorder size={"24"} />
      )}
    </div>
  );
}
