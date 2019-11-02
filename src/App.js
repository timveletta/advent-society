import React, { useState, useEffect } from "react";
import "./App.css";
import QrReader from "react-qr-reader";

function App() {
  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    console.log(qrCode);
  }, [qrCode]);

  return (
    <div className="App">
      <QrReader
        onScan={setQrCode}
        onError={e => console.error(e)}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default App;
