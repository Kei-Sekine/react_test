import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>TEST</h1>
      <p style={contentStyle}>aaa</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
