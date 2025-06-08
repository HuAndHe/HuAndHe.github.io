import { NavLink } from "react-router";
import HomeContent from "./HomeContent";
import AboutContent from "./AboutContent";
import ContactContent from "./ContactContent";
const routeList = [
  {
    key: "home",
    path: "/",
    element: <HomeContent />,
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
    element: <AboutContent />,
  },
  {
    key: "contact",
    path: "/contact",
    element: <ContactContent />,
  },
];

const sideList = [
  {
    key: "home",
    title: "Home",
  },
  {
    key: "groups",
    title: "Group",
    children: [
      {
        key: "child1",
        title: "Child1",
      },
      {
        key: "child2",
        title: "Child2",
      },
    ],
  },
  {
    key: "about",
    title: "About",
  },
];

function generateItem(item) {
  const res = routeList.find((route) => {
    return route.key === item.key;
  });

  const path = res?.path;
  console.log(path);
  return (
    <div
      className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:text-blue-700 group"
      key={item.key}
    >
      <svg
        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 21"
      >
        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
      </svg>
      {/* flex-auto make its width fill the remain width */}
      <NavLink className="flex-auto" to={path}>
        <span className="ms-3">{item.title}</span>
      </NavLink>
    </div>
  );
}
// block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent

function generateGroup(group) {
  return (
    <details className="items-center justify-center group" key={group.key}>
      <summary className="w-full items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  md:hover:text-blue-700 group ">
        {group.title}
      </summary>

      {group.children.map((item) => generateItem(item))}
    </details>
  );
}

function SideBar() {
  return (
    <>
      <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 z-40">
        <nav className="flex-grow space-y-1 overflow-y-auto">
          {sideList.map((item) =>
            item.children && item.children.length > 0
              ? generateGroup(item)
              : generateItem(item)
          )}
        </nav>
      </div>
    </>
  );
}

export default SideBar;
