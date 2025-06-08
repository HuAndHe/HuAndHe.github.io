import { NavLink, useRoutes } from "react-router";
import { useEffect } from "react";

import HomeContent from "./HomeContent";
import AboutContent from "./AboutContent";
import ContactContent from "./ContactContent";
const routeList = [
  {
    key: "home",
    path: "/",
    element: <HomeContent/>
  },
  {
    key: "child1",
    path: "/child1",
    element: <div>TODO 1</div>,
  },
  { key: "child2", path: "/child2", element: <div>TODO 2</div> },
  {
    key: "about",
    path: "/about",
    element: <AboutContent/>
  },
  {
    key: "contact",
    path: "/contact",
    element: <ContactContent/>
  },
];


const onMount = () => {
  console.log("Contact is mounted");
};
const onUnmount = () => {
  console.log("Contact is unmounted");
};
function Content() {
  const route = useRoutes(routeList);
  useEffect(() => {
    onMount();
    return onUnmount();
  }, []);
  return (
    <>
        <div className="w-full h-full">{route}</div>
    </>
  ); 
}

export default Content;
