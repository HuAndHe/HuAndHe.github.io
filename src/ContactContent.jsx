import { useEffect } from "react";

const onMount = () => {
  console.log("Contact is mounted");
};
const onUnmount = () => {
  console.log("Contact is unmounted");
};
function ContactContent() {
  useEffect(() => {
    onMount();
    return onUnmount();
  }, []);
  return (
    <>
      <div className="w-full h-full text-gray-800 items-center justify-center flex justify-center items-center">
        <div>
          <p className="antialiased md:subpixel-antialiased text-emerald-300 text-2xl"><label>Email:</label><a>hup3719@163.com</a></p>
        </div>
      </div>
    </>
  );
}

export default ContactContent;
