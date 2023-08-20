import React, { useState } from "react";
import { formatNumberWithCommas } from "../../../utils/PriceSeparators";
// import TopBar from "../../component/base/TopBar";
import TopBar from "../../../component/base/TopBar";
import { Button, Input } from "@mui/material";
import FullButton from "../../../component/base/FullButton";
import { useNavigate } from "react-router-dom";
import { numberToWords } from "@persian-tools/persian-tools";

import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

interface inputsProp {
  cartNumber: any;
  amount: any;
}

const style = {
  all: "unset",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "78%",
  height: "320px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  pt: 5,
  border: "none",
  borderRadius: "14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

function TransitionAmount() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<inputsProp>({
    cartNumber: null,
    amount: null,
  });
  const handleChanges = (e: any) => {
    // console.log(e.target.name);
    setInputs((prev: inputsProp) => ({
      ...prev,
      [e.target.name]: e.target?.value,
    }));
  };

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(20000); // 20,000

  const handleChanges2 = (e: any) => {
    // console.log(e.target.name);
    setAmount(e.target?.value);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <div className="h-[100vh] w-ful overflow-hidden flex flex-col justify-between">
      <div>
        <TopBar prevLink={"/home"} title={"کیف پول"} />
        <div className=" mx-3 border-[1.5px] mb-3 font-iran-medium border-primary-main flex flex-col items-center justify-between h-[31%] bac rounded-lg py-1">
          <p className="font-iran-reg text-[18px]">موجودی کیف پول</p>
          <p dir="rtl" className=" text-[18px]">
            {formatNumberWithCommas("80000000")} ریال
          </p>
        </div>
        <div dir="rtl" className="px-3 text-[15px]">
          <p className="fon font-iran-medium text-[14px]">
            مبلغ مورد نظر خود را وارد نمایید
          </p>
          <form action="" method="post" className="">
            <input
              type="text"
              dir="ltr"
              placeholder="شماره کارت با شبا"
              name="cartNumber"
              value={inputs.cartNumber}
              onChange={handleChanges}
              style={{
                backgroundColor: "#f5f5f5",
                borderBottom: "1.2px solid #49454F",
              }}
              className="my-3 py-[4px] h-8 w-full flex items-center text-center"
            />

            <div className="relative">
              <input
                dir="ltr"
                type="text"
                placeholder="مبلغ"
                name="amount"
                value={inputs.amount}
                onChange={handleChanges}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderBottom: "1.2px solid #49454F",
                }}
                className="my-3 py-[4px] h-8 w-full flex items-center text-center"
              />
              <p className="a ab absolute left-3 top-3">ریال</p>
            </div>
            {Number(inputs?.amount) % 10 == 0 && (
              <div className="text-center text-[12px] text-[#2B9AFF]">
                {`${numberToWords(Number(inputs?.amount) / 10)}`} تومان
                {/* {Number(formData?.amount)} */}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-[90%] mx-auto border-b-2 border-dashed pb-3 border-[#3333333f]">
            <div className="w-[70%] mx-auto flex flex-col gap-3 ">
              <div className="flex flex-row-reverse justify-between">
                <p className="text-[15px] text-light-2 font-iran-reg">
                  نام گیرنده
                </p>
                <p className="text-black font-iran-medium text-[16px]">
                  سحرمیرامینی
                </p>
              </div>
              <div className="flex flex-row-reverse justify-between">
                <p className="text-[15px] text-light-2 font-iran-reg">
                  مبلغ واریزی
                </p>
                <p dir="rtl" className="text-black font-iran-medium text-[16px]">
                  {formatNumberWithCommas("200000")}ريال
                </p>
              </div>
              <div className="flex flex-row-reverse justify-between">
                <p className="text-[15px] text-light-2 font-iran-reg">
                  بانک مقصد
                </p>
                <p className="text-black font-iran-medium text-[16px]">
                  بانک شهر
                </p>
              </div>
              <div className="flex flex-row-reverse justify-between">
                <p className="text-[15px] text-light-2 font-iran-reg">
                  شماره کارت
                </p>
                <p className="text-black font-iran-medium text-[16px]">
                  76889991010
                </p>
              </div>
            </div>
          </div>
          {/* <Divider /> */}

          <div className="flex flex-row-reverse w-[80%] mx-auto text-center justify-center">
            <button
              onClick={() => navigate("/TransResult")}
              className="text-white bg-primary-main rounded-lg py-[10px] px-9 font-iran-ligh w-[150px]"
            >
              تایید
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="text-primary-green border-primary-main border-2 mr-4 rounded-lg py-[10px] px-9 w-[150px]font-iran-ligh"
            >
              انصراف
            </button>
          </div>
        </Box>
      </Modal>

      <div className="px-3 mb-[40px]">
        <FullButton
          isActive={inputs.amount && inputs.cartNumber}
          text={"تایید"}
          action={() => setOpenModal(true)}
        />
      </div>
    </div>
  );
}

export default TransitionAmount;
