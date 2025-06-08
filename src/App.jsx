import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Content from "./Content";
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
      <div className="grid grid-cols-10">
          <div className="col-span-2"><SideBar/></div>
          <div className="col-span-8"><Content/></div>
        </div>
      <SideBar />
    </>
  );
}

export default App;
