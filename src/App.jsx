import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwtchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>TEST</h1>
      <ColorfulMessage color="blue" message="おげんきですか？" />
      <ColorfulMessage color="pink" message="病気です" />
      <button onClick={onClickCountUp}>ボタン</button>
      <br />
      <button onClick={onClickSwtchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(aaaa)</p>}
    </>
  );
};

export default App;
