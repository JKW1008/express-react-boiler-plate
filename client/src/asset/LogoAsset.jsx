import Logo from "./png/Logo.png";

export default function LogoAsset({ large }) {
  return (
    <div
      className={`${large ? "w-40" : "w-24"} flex justify-center items-center`}
    >
      <img src={Logo} alt="" />
    </div>
  );
}
