import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export default function MenuAsset({ isSelected }) {
  return (
    <div className="w-full h-full">
      {isSelected ? (
        <AiOutlineMenuUnfold size={"24"} />
      ) : (
        <AiOutlineMenuFold size={"24"} />
      )}
    </div>
  );
}
