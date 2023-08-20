import React, { useState } from "react";
import TopBar from "../../component/base/TopBar";
import { Input } from "@mui/material";
import FullButton from "../../component/base/FullButton";

interface inputsProp {
  name: string;
  family: string;
  phone: number | null;
}

function UpdateProfile() {
  const [inputs, setInputs] = useState<inputsProp>({
    name: "",
    family: "",
    phone: null,
  });

  function llog() {
    console.log(inputs);
  }

  const handleChanges = (e: any) => {
    // console.log(e.target.name);
    setInputs((prev: inputsProp) => ({
      ...prev,
      [e.target.name]: e.target?.value,
    }));
  };

  return (
    <div className="h-[100vh] w-ful overflow-hidden flex flex-col justify-between">
      <div>
        <TopBar prevLink={"/Profile"} title={"حساب کاربری"} />
        <div dir="rtl" className="px-3 text-[15px]">
          <p className="font-iran-reg text-[13px]">لطفا اطلاعات فردی خود را کامل نمایید</p>
          <form action="" method="post" className="flex flex-col font-iran-medium">
            <input
              type="text"
              placeholder="نام"
              name="name"
              onChange={handleChanges}
              style={{
                backgroundColor: "#f5f5f5",
                borderBottom: "1.2px solid #49454F",
              }}
              className="my-3 py-[9px] h-8 pr-3"
            />
            <input
              type="text"
              placeholder="نام خانوادگی"
              name="family"
              style={{
                backgroundColor: "#f5f5f5",
                borderBottom: "1.2px solid #49454F",
              }}
              onChange={handleChanges}
              className="my-3 py-[9px] h-8 pr-3"
            />
            <input
              type="text"
              placeholder="شماره تلفن همراه"
              name="phone"
              style={{
                backgroundColor: "#f5f5f5",
                borderBottom: "1.2px solid #49454F",
              }}
              onChange={handleChanges}
              className="my-3 py-[9px] h-8 pr-3"
            />
          </form>
        </div>
      </div>

      <div className="px-3 mb-2" onClick={llog}>
        <FullButton
          isActive={inputs.family && inputs.phone && inputs.name}
          text={"تایید"}
          action={() => console.log("??")}
        />
      </div>
    </div>
  );
}

export default UpdateProfile;
