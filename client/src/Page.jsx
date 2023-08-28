import { Link } from "react-router-dom";
import LogoAsset from "./asset/LogoAsset";
import Layout from "./components/Layout";
import { tourItems } from "./lib/tourItems";

export default function Page() {
  return (
    <Layout isFooter>
      <div className="w-full h-full flex flex-col py-16 px-4 space-y-8">
        {/* 슬로건 */}
        <div>
          <div className="flex items-center">
            <LogoAsset />
          </div>
          <p className="text-2xl font-semibold">L'autista più dinamico e'</p>
        </div>
        {/* 상품 리스트 */}
        <div className="flex flex-col space-y-4">
          {tourItems.map((item, index) => (
            <Link to={item.url} key={index}>
              <div
                style={{ backgroundImage: `url('${item.bgImage}')` }}
                className={`
              relative
              group
              cursor-pointer
              bg-cover bg-center
              w-full h-20 rounded-md border border-gray-300`}
              >
                <div
                  className="w-full h-full 
              bg-gradient-to-r 
              from-gray-900/50 
              to-gray-700/50
              group-hover:from-gray-900/70 group-hover:to-gray-700/70
          
              "
                />
                <div
                  className="absolute inset-0
                              w-full h-full
                              flex flex-col
                              justify-center
                              px-4
                              text-gray-200"
                >
                  <h2 className="font-bold group-hover:text-white">
                    {item.title}
                  </h2>
                  <p className="text-xs text-gray-300 group-hover:text-white">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
