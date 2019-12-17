import React, { useState, useEffect, FC } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  color: #fff;

  label {
    display: block;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 0.15rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  input {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    border-bottom: 1px solid #fff;
    font-size: 8rem;
    color: #fff;
    width: 100vw;
    text-align: center;
  }
`;

const CodeEntry: FC<{ lockCode: string }> = ({ lockCode }) => {
  const [code, setCode] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("CODE") === lockCode) {
      history.push("/dashboard");
    }
  });

  useEffect(() => {
    if (code.length > 4) {
      setCode(code.slice(0, 4));
    }
    if (code === lockCode) {
      localStorage.setItem("CODE", code);
      history.push("/dashboard");
    }
  }, [code, lockCode]);

  return (
    <Container>
      <label>Enter the Code</label>
      <input
        type="number"
        value={code}
        onChange={e => setCode(e.target.value)}
      ></input>
    </Container>
  );
};

export default CodeEntry;
