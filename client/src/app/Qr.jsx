import { useState } from "react";
import Layout from "../components/Layout";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { GridLoader } from "react-spinners";

export default function Qr() {
  const [prevResult, setPrevResult] = useState(null);

  const handleSuccess = (result) => {
    if (prevResult === null || prevResult !== result) {
      setPrevResult(result);
      alert(prevResult);
      //  mutate 전송 react-query
    }
  };

  return (
    <Layout isHeader isFooter>
      <div className="w-full h-full flex items-center">
        {/* isLoading = true */}
        {false ? (
          <div className="w-full flex justify-center">
            <GridLoader size={50} />
          </div>
        ) : (
          <QrScanner
            onDecode={handleSuccess}
            onError={(error) => console.log(error?.message)}
            constraints={{ facingMode: "environment" }}
            scanDelay={500}
          />
        )}
      </div>
    </Layout>
  );
}
