import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QrReader from "react-qr-reader";

const QrCodeReader = () => {
  const history = useHistory();
  const [qrCode, setQrCode] = useState("");
  let width = window.innerWidth,
    height = window.innerHeight;

  useEffect(() => {
    console.log(qrCode);
    if (qrCode && qrCode.match(/^puzzle-/)) {
      const puzzleId = qrCode.split("puzzle-")[1];
      history.push(`/puzzle/${puzzleId}`);
    }
  }, [qrCode]);

  return (
    <QrReader
      onScan={setQrCode}
      onError={(e: string) => console.error(e)}
      showViewFinder={true}
      className="qr-code-reader"
      style={{ width, height }}
    ></QrReader>
  );
};

export default QrCodeReader;
