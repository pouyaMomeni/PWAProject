import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import userIcon from "../../assets/img/icon/home/user.svg";
import walletIcon from "../../assets/img/icon/home/wallet.svg";
import homeIcon from "../../assets/img/icon/home/home.svg";
import cartIcon from "../../assets/img/icon/home/cart.svg";
import insuranceIcon from "../../assets/img/icon/home/insurance.svg";

const navItems = [
  {
    label: "پروفایل من",
    route: "/Profile",
    src: userIcon,
  },
  {
    label: " کیف پول",
    route: "/Wallet",
    src: walletIcon,
  },
  {
    label: "سرویس ها",
    route: "/home",
    src: homeIcon,
  },
  {
    label: "کارت به کارت",
    route: "/Cart",
    src: cartIcon,
  },
  {
    label: " بیمه من",
    route: "/Insurance",
    src: insuranceIcon,
  },
];
export default function FooterNav() {
  const location = useLocation();
  const [navSelector, setNavSelector] = useState(location.pathname);

  useEffect(() => {
    setNavSelector(location.pathname);
  }, []);

  return (
    <div
      dir="rtl"
      className="shadow-[2px_1px_10px_1px_#e3e2e2] overflow-hidden grid grid-cols-5  bg-[#FFF] fixed bottom-0 left-0 right-0 pb-3 w-full  text-center"
    >
      {navItems.map((item, index) => (
        <Link to={item.route} key={index}>
          {" "}
          <div className="p-[.5rem] h-[70px] flex flex-col justify-center items-center">
            <div
              className={`block w-[32px] h-[32px] p-[.3rem] rounded-[50%] ${
                navSelector === item.route ? "" : ""
              } `}
            >
              <img
                alt="icon"
                src={item.src}
                className={`w-[25px] h-[24px] mx-auto ${
                  navSelector === item.route ? "opacity-[1]" : "opacity-[0.6]"
                } `}
              />
            </div>
            {true && (
              <p
                className={` ${
                  navSelector === item.route
                    ? "text-[color:var(--primary-color)]"
                    : "text-[#BEC4D1]"
                } fo font-iran-reg text-[11px] mt-[.3rem]`}
              >
                {item.label}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
