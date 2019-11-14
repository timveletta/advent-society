import React, { useState, useEffect } from "react";
import QrReader from "react-qr-reader";

//TODO refactor into a functional component
export default function QrCodeReader() {
  const [qrCode, setQrCode] = useState(null);
  let width = window.innerWidth,
    height = window.innerHeight;

  useEffect(() => {
    console.log(qrCode);
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
}
