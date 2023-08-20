import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faQuestionCircle,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

interface TopBarProps {
  prevLink: string;
  title?: string | null;
}

export default function TopBar(props: TopBarProps) {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate(props.prevLink);
  };

  return (
    <div
      className="h-[70px] z-5 flex justify-between items-center w-full p-[1rem] "
      style={{ direction: "rtl" }}
    >
      <FontAwesomeIcon
        // size={"4x"}
        icon={faQuestionCircle}
        className="h-[20px] w-[20px]   text-[color:var(--secondary-color)] "
      />
      <span className="text-[14px] font-iran-medium "> {props.title}</span>
      <div
        className="w-[40px] flex h-7 justi justify-center items-center"
        onClick={() => handleBack()}
      >
        <FontAwesomeIcon
          size={"8x"}
          icon={faAngleLeft}
          className="h-[16px] w-[22px]   text-[color:var(--secondary-color)]"
        />
      </div>
    </div>
  );
}
