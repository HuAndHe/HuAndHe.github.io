import { useEffect } from "react";

const onMount = () => {
  console.log("Home is mounted");
};
const onUnmount = () => {
  console.log("Home is unmounted");
};
function HomeContent() {
  useEffect(() => {
    onMount();
    return onUnmount();
  }, []);
  return (
    <>
      <div className="w-full h-full text-gray-800 items-center justify-center flex justify-center items-center">
        <div>
          <p className="antialiased md:subpixel-antialiased text-emerald-300 text-2xl">Home...</p>
        </div>
      </div>
    </>
  );
}

export default HomeContent;
