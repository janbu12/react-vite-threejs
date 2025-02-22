import { useEffect, useState } from "react";
import { ClimbingBoxLoader, PropagateLoader } from "react-spinners";

export default function Loading({isLoading}) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 1500);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[radial-gradient(ellipse_at_bottom,rgba(45,45,45,1)_10%,rgba(13,13,13,1)_70%)] z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* <div className="animate-spin w-16 h-16 border-t-4 border-blue-500 rounded-full"></div> */}
      <PropagateLoader
        color={"#ffffff"}
        loading={isLoading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
