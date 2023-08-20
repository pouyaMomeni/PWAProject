import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

//mui
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

//icon and img
import logoutIcon from "../../assets/img/icon/home/login.svg";
import profile from "../../assets/img/icon/home/profile.svg";
import activity from "../../assets/img/icon/home/activity.svg";
import site from "../../assets/img/icon/home/global-search.svg";
import news from "../../assets/img/icon/home/note-2.svg";
import about from "../../assets/img/icon/home/warning-2.svg";
import contact from "../../assets/img/icon/home/headphone.svg";
import navLogo from "../../assets/img/logo.svg";

type Anchor = "right";

export default function SideNav(props: any) {
  let navigate = useNavigate();

  //logout from app
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  function handleSideBtn(name: string) {
    switch (name) {
      case "profile":
        navigate("/Profile");
        break;
      case "activity":
        navigate("/activity");
        break;
      default: {
      }
    }
  }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 200, height: "100vh", position: "relative" }}
      role="presentation"
      onClick={props.toggle(anchor, false)}
      onKeyDown={props.toggle(anchor, false)}
    >
      <img className="w-[71px] mx-auto my-[1.5rem]" src={navLogo} alt="logo" />
      <List>
        {[
          { text: "پروفایل من", icon: profile, name: "profile" },
          { text: "فعالیت های من", icon: activity, name: "activity" },
          { text: "سایت اتباع", icon: site, name: "atba-site" },
          { text: "خبرنامه اتباع", icon: news, name: "atba-news" },
          { text: "درباره سازنده", icon: about, name: "about-us" },
          { text: "ارتباط با ما", icon: contact, name: "contact-us" },
        ].map((item, index) => (
          <ListItem dir="rtl" key={index} disablePadding>
            <ListItemButton onClick={() => handleSideBtn(item.name)}>
              <img
                className="ml-[.5rem] w-[26px] text-[#65B554]"
                color="#65B554"
                src={item.icon}
                alt="icon"
              />
              {/* <ListItemText
                sx={{ textAlign: "right", fontSize: "14px" }}
                primary={item.text}
              /> */}
              <p className="font-iran-reg text-[14px] my-2 text-black">
                {item.text}
              </p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div
        onClick={() => logout()}
        dir="rtl"
        className="text-right flex items-center p-[1rem] absolute bottom-0 w-full"
      >
        <img
          className="ml-[.5rem] w-[24px]"
          color="#3f2"
          src={logoutIcon}
          alt="icon"
        />
        <span>خروج</span>
      </div>
    </Box>
  );
  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={props.state[anchor]}
            onClose={props.toggle(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
