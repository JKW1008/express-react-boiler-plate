import { Button, Checkbox, Input } from "@material-tailwind/react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <Layout isHeader>
      <div
        className="pt-28 pb-12 w-full h-full flex
     flex-col justify-center items-center px-8 space-y-8"
      >
        {/* 회원가입 폼 */}
        <form>
          <div className="flex flex-col space-y-8">
            {/* 제목 */}
            <div>
              <h4 className="text-2xl font-semibold text-blue-gray-900">
                로그인
              </h4>
              <p className="mt-1 text-gray-700">Enter your details to signin</p>
            </div>

            <div className="space-y-4">
              {/* 아이디 */}
              <div className="">
                <Input
                  type="text"
                  label="아이디"
                  className="pr-20 focus:ring-0"
                  containerProps={{ className: "min-w-0" }}
                />
              </div>

              {/* 패스워드 */}
              <div>
                <Input
                  type="text"
                  label="패스워드"
                  className="pr-20 focus:ring-0"
                  containerProps={{ className: "min-w-0" }}
                />
              </div>

              {/* 버튼 */}
              <Button type="submit" color="red" fullWidth>
                로그인
              </Button>
            </div>
            <p>
              회원이 아니시라면?
              <Link to="/signup">
                <span>회원가입</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
