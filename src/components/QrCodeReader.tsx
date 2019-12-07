import React, { useState, useEffect } from "react";
import QrReader from "react-qr-reader";

//TODO refactor into a functional component
const QrCodeReader = () => {
  const [qrCode, setQrCode] = useState(null);
  let width = window.innerWidth,
    height = window.innerHeight;

  useEffect(() => {
    console.log(qrCode);
    // TODO if its a valid puzzle then redirect to the page
  }, [qrCode]);

  return (
    <QrReader
      onScan={setQrCode}
      onError={(e: string) => console.error(e)}
      showViewFinder={true}
      className="qr-code-reader"
      style={{ width, height }}
    >
      Something on the screen
    </QrReader>
  );
};

export default QrCodeReader;
