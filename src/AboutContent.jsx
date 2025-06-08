import { useEffect } from "react";

const onMount = () => {
  console.log("About is mounted");
};
const onUnmount = () => {
  console.log("About is unmounted");
};
function AboutContent() {
  useEffect(() => {
    onMount();
    return onUnmount();
  }, []);
  return (
    <>
      <div className="w-full h-full text-gray-800 items-center justify-center flex justify-center items-center">
        <div>
          <p className="antialiased md:subpixel-antialiased text-emerald-300 text-2xl">About...</p>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
