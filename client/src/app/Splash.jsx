import LogoAsset from "../asset/LogoAsset";
import Layout from "../components/Layout";

export default function Splash() {
  return (
    <Layout>
      <div
        className="
      w-full h-full 
      bg-cover
      bg-center
      bg-[url('https://images.unsplash.com/photo-1567449394863-577a4311b51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')]
      "
      >
        {/* 빈 박스 */}
        <div className="w-full h-full bg-white/30" />
        {/* 로고 영역 */}
        <div
          className="flex flex-col absolute top-[50%] left-[50%]
        -translate-x-[50%]
        -translate-y-[50%]
        items-center 
        "
        >
          <h1>L'autista più dinamico e'</h1>
          <div>
            <LogoAsset large />
          </div>
        </div>
      </div>
    </Layout>
  );
}
