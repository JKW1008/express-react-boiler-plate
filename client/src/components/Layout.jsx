import { menuItems } from "../lib/menuitems";
import GoBack from "../asset/GoBack";
import LogoAsset from "../asset/LogoAsset";
import { Link } from "react-router-dom";

export default function Layout({
  children,
  isHeader,
  canGoback,
  title,
  isFooter,
}) {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className=" relative max-w-sm w-full bg-gray-200">
        {/* 헤더 */}
        {isHeader && (
          <div className="w-full h-20 border-b border-neutral-300/50 grid grid-cols-3 items-center">
            {/* 1 */}
            <div className="text-gray-400">{canGoback && <GoBack />}</div>
            {/* 2 */}
            <div className="w-full flex justify-center items-center">
              {title ? title : <LogoAsset large />}
            </div>
            {/* 3 */}
          </div>
        )}
        {children}
        {/* 푸터(메뉴) */}
        {isFooter && (
          <div
            className="
          absolute bottom-0 
          w-full h-[100px] 
          grid grid-cols-5 
          gap-2 p-2 border-t-2 
          border-neutral-300"
          >
            {menuItems.map((item) => (
              <Link to={item.url} key={item.title}>
                <div
                  className="
                w-full h-full 
                flex flex-col 
                justify-center
                items-center
                space-y-1"
                >
                  {/* 아이콘 */}
                  <div>{item.icon}</div>
                  {/* 타이틀 */}
                  <div className=" uppercase text-xs">{item.title}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
