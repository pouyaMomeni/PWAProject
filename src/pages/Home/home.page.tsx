import { Fragment, useState } from "react";
import billIcon from "../../assets/img/icon/bill.svg";
import cartIcon from "../../assets/img/icon/cart.svg";
import insuranceIcon from "../../assets/img/icon/insurance.svg";
import internetChargeIcon from "../../assets/img/icon/internetCharge.svg";
import simChargeIcon from "../../assets/img/icon/simCharge.svg";
import walletIcon from "../../assets/img/icon/wallet.svg";
import TicketIcon from "../../assets/img/icon/ticket.svg";

//redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

//component
import FooterNav from "../../component/home/fotternav";
import HomeItem from "../../component/home/HomeItem";
import TopBar from "../../component/home/TopBar";
import SideNav from "../../component/home/SideNav";
// test
// import { useGetTest } from "../../hook/authApi";

const services = [
  { icon: cartIcon, label: "کارت به کارت", link: "/CartToCart" },
  { icon: simChargeIcon, label: "شارژ سیم کارت", link: "/simCharge" },
  { icon: internetChargeIcon, label: "شارژ اینترنت", link: "/Internet" },
  { icon: insuranceIcon, label: "خدمات بیمه", link: "/insurance" },
  { icon: walletIcon, label: "کیف پول", link: "/Wallet" },
  { icon: billIcon, label: "پرداخت قبوض ", link: "/Bills" }, //
  { icon: TicketIcon, label: "خرید بلیط", link: "/Ticket" },
];

type Anchor = "right";

export default function Home() {
  const user = useSelector((state: RootState) => state.user);

  // console.log(window.innerHeight, "w")
  // const platform = navigator.platform;
  const [state, setState] = useState({
    right: false,
  });
  // console.log(platform);

  function log() {
    // console.log(platform.platform);
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

    // const data = useGetTest()
    // console.log( data);
    

  return (
    <div dir="rtl" className=" w-full  bg-[#FFF]  ">
      <SideNav toggle={toggleDrawer} state={state} />
      <div className="h-screen flex flex-col">
        <TopBar navAction={toggleDrawer} />
        {/* <button onClick={()}>s</button> */}
        <div className="relative top-[-20px] bg-[#FFF] h-[20px] z-10 w-full  shadow-[0_-5px_7px_rgba(50, 88, 42, 0.35)]   rounded-t-xl"></div>
        <div className="flex flex-1 relative top-[-20px]  overflow-auto w-full px-[1rem] pb-[1rem]  bg-[#FFF] ">
          <div className=" w-full ">
            <div className="grid grid-cols-3 gap-[20px]">
              {services.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <HomeItem
                      link={item.link}
                      label={item.label}
                      icon={item.icon}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex h-[70px] z-20">
          <FooterNav />
        </div>
      </div>
    </div>
  );
}
