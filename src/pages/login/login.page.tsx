import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

//translation

//api
import LoginService from "./login.service";

//component
import Logo from "../../component/base/Logo";
import EnterNumber from "../../component/login/EnterNumber";
import VerificationCode from "../../component/login/VerificationCode";

export default function Login() {
  let navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState(false);
  const [iscode, setcode] = useState(false);
  const [formData, setFormData] = useState({
    phonnumber: "",
    verifycode: "",
  });

  useEffect(() => {
    setcode(false);
  }, []);

  //handle user registration
  const handleLogin = () => {
    if (formData.phonnumber != "") {
      // LoginService.registeruser(formData).then((p) => {
      //   if (p.data.errorcode == 0) {
      setcode(true);
      //   }
      // });
    } else {
      Swal.fire({
        title: "شماره همراه را وارد نمایید",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        icon: "warning",
        width: 400,
        confirmButtonText: `تایید`,
        showDenyButton: false,
        confirmButtonColor: "#32582A",
        customClass: {
          title: "swal2-steps",
        },
      });
    }
  };

  //binding field values by name
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.value.length == 11) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const getVrifyCode = (e: any) => {
    // console.log("verify", e)
    if (e.length == 4) {
      formData.verifycode = e;
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const confirmCode = () => {
    // Swal.fire("کد وارد شده صحیح نمیباشد");
    // navigate("/home")
    LoginService.login(formData).then((p) => {
      if (p.data.errorcode == 0) {
        localStorage.setItem("token", p.data.token);
        navigate("/home");
      }
      if (p.data.errorcode == 500) {
        Swal.fire("کد وارد شده صحیح نمیباشد");
      }
    });
  };

  //timer
  const [minutes, setMinutes] = useState(Math.floor(120 / 60));
  const [seconds, setSeconds] = useState(120 - minutes * 60);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [iscode]);

  return (
    <>
      <div
        dir="rtl"
        className="w-full h-[100vh] overflow-x-hidden overflow-y-auto bg-[#fff] flex flex-col items-center justify-center"
      >
        <Logo />
        {!iscode ? (
          <EnterNumber
            formData={formData}
            inputAction={(e: any) => handleChange(e)}
            buttonAction={() => handleLogin()}
            isActive={activeBtn}
          />
        ) : (
          <>
            <VerificationCode
              formData={formData}
              inputAction={(e: any) => getVrifyCode(e)}
              buttonAction={() => confirmCode()}
              resendbuttonAction={() => handleLogin()}
              confirmButtonAction={() => setcode(false)}
              isActive={activeBtn}
              min={minutes}
              sec={seconds}
            />
          </>
        )}
      </div>
    </>
  );
}
