import { useState, useEffect, useRef, useCallback } from "react";

const Practice = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "azjsjdijwipjqjdnzmnxceproqnsmndmnzmxcnSKJDKAJDLSJDKSMCN";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md shadow-md rounded-lg px-4 py-3 my-8 bg-blue-50 text-blue-400">
      <h1 className="text-white text-center text-2xl"> 패스워드 만들기</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
        >
          COPY
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultValue={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="Numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultValue={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="Character">Character</label>
        </div>
      </div>
    </div>
  );
};

export default Practice;
