import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
const onMount = () => {
  console.log("App is mounted");
};
const onUnmount = () => {
  console.log("App is unmounted");
};

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    onMount();
    return onUnmount();
  }, []);

  return (
    <>
      <Header />
      <SideBar />
    </>
  );
}

export default App;
