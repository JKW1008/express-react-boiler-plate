import { AiOutlineHome, AiFillHome } from "react-icons/ai";

export default function HomeAsset({ isSelected }) {
  return (
    <div className="w-full h-full">
      {isSelected ? <AiFillHome size={"24"} /> : <AiOutlineHome size={"24"} />}
    </div>
  );
}
