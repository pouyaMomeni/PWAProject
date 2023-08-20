import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/splashLogo.png";
import bg from "../../assets/img/splashBg.png";

export default function Splash() {
  let navigate = useNavigate();

  useEffect(() => {
    let timerId: any;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      navigate("/login");
    }, 3 * 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <div className=" h-[100vh] relative">
        <div className="font-[700] text-[12px] flex flex-col items-center justify-center h-[60%]">
          <img alt="logo" src={logo} className="w-[100%]  mx-auto" />
        </div>
        <img
          alt="logo"
          src={bg}
          className="w-[100%]  mx-auto absolute bottom-0"
        />
      </div>
    </>
  );
}
