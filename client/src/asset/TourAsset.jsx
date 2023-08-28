import { MdTour, MdOutlineTour } from "react-icons/md";

export default function TourAsset({ isSelected }) {
  return (
    <div className="w-full h-full">
      {isSelected ? <MdTour size={"24"} /> : <MdOutlineTour size={"24"} />}
    </div>
  );
}
