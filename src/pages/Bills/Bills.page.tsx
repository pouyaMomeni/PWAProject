import React, { useEffect } from "react";

import allBillsA from "../../assets/img/Bills/allBills-A.svg";
import allBillsN from "../../assets/img/Bills/allBils-N.svg";
import barghA from "../../assets/img/Bills/bargh-A.svg";
import barghN from "../../assets/img/Bills/bargh-N.svg";
import naftA from "../../assets/img/Bills/naft-A.svg";
import naftN from "../../assets/img/Bills/naft-N.svg";
import tellA from "../../assets/img/Bills/tell-A.svg";
import tellN from "../../assets/img/Bills/tellBill-N.svg";
import waterA from "../../assets/img/Bills/wator-A.svg";
import waterN from "../../assets/img/Bills/water-N.svg";
import trash from "../../assets/img/Bills/trash.svg";
import edit from "../../assets/img/Bills/edit-2.svg";

import TopBar from "../../component/base/TopBar";

import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
// import Modal from "@mui/joy/Modal";
// import ModalClose from "@mui/joy/ModalClose";
// import Typography from "@mui/joy/Typography";
// import Sheet from "@mui/joy/Sheet";

import FullButton from "../../component/base/FullButton";
import { Link } from "react-router-dom";

const style = {
  all: "unset",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "80px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  border: "none",
  borderRadius: "14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const BillsHead = [
  {
    label: "همه قبوض",
    logoActive: allBillsA,
    logoNotActive: allBillsN,
  },
  {
    label: "قبض آب",
    logoActive: waterA,
    logoNotActive: waterN,
  },
  {
    label: "قبض برق",
    logoActive: barghA,
    logoNotActive: barghN,
  },
  {
    label: "قبض گاز'",
    logoActive: naftA,
    logoNotActive: naftN,
  },
  {
    label: "قبض تلفن",
    logoActive: tellA,
    logoNotActive: tellN,
  },
];

const allBills = [
  {
    label: "قبض آب شهریور",
    price: "20,000",
    date: "20 مهر 1402",
    icon: waterA,
  },
  {
    label: "قبض برق شهریور",
    price: "20,000",
    date: "20 مهر 1402",
    icon: barghA,
  },
];

function Bills() {
  const inHeight = window.innerHeight;
  const [page, setPage] = React.useState<number>(0);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = React.useState<{
    BillsId: string;
    BillsName: string;
  }>({
    BillsId: "",
    BillsName: "",
  });

  useEffect(() => {
    setInputs({ BillsId: "", BillsName: "" });
  }, [page]);

  const bills = true;
  return (
    <div
      dir="rtl"
      style={{}}
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col font-iran-reg"
    >
      <TopBar title={"قبض های من"} prevLink="/home" />
      {/* Heads */}
      <div className="w-[90%] mx-auto flex mt-2 pb-2  justify-between ">
        {BillsHead.map((bill, i) => (
          <div
            key={i}
            className=" flex flex-col justify-center items-center"
            onClick={() => setPage(i)}
          >
            <img
              src={i === page ? bill.logoActive : bill.logoNotActive}
              alt=""
              width={32}
            />
            <p className="text-[10px] mt-1 font-iran-medium">{bill.label}</p>
          </div>
        ))}
      </div>
      <Divider
        sx={{
          width: "90%",
          marginRight: "auto",
          marginLeft: "auto",
          backgroundColor: "#00000070",
        }}
      />
      {/* Content for all bills */}
      {bills &&
        page == 0 &&
        allBills?.map((bill, i) => (
          <div
            className="border w-[90%] mx-auto mt-4 rounded-lg border-light-2 flex flex-col gap-5 px-3 pt-4 pb-2"
            key={i}
          >
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={bill.icon} width={30} alt="" />
                <p className="pr-2 font-iran-semibold text-[13px] w-28">
                  {bill.label}
                </p>
              </div>
              <p className="text-[16px] text-primary-main ">{bill.price} ريال</p>
            </div>

            <div className="flex justify-between">
              <span className="text-[13px] fon font font-normal">
                {bill.date}
              </span>
              <div className="flex gap-3 items-center">
                <Link to='/Bills/Edit'>
                  <img  src={edit} width={22} alt="" className="cursor-pointer" />
                </Link>
                <img
                  onClick={() => setOpen(true)}
                  src={trash}
                  width={22}
                  alt=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      {/* {bills && page === 0 && (
        <div className="w-[90%] mx-auto">
          <p className="font-iran-reg text-light-2 text-[15px] text-center mt-5">
            هنوز قبضی ثبت نشده است.
          </p>
        </div>
      )} */}
      {/* Content for other Bills */}
      {page === 1 || page === 2 || page === 3 || page === 4 ? (
        <div className="w-[90%] mx-auto flex flex-col  mt-6">
          <p className="font-iran-medium text-[13px] mb-3 text-light-2">
            شناسه قبض خود را همراه با عنوان قبض مورد نظر وارد نمایید{" "}
          </p>
          <input
            id="filled-basic"
            className="mb-4 py-[6px] pr-2 h-9  rounded-t font-iran-reg text-[14px]"
            style={{
              borderBottom: "1.2px solid #49454F",
              backgroundColor: "rgba(233, 238, 239, 0.6)",
            }}
            placeholder={
              page === 2 || page === 1
                ? "شناسه قبض"
                : page === 3
                ? "شماره اشتراک"
                : "شماره ثابت"
            }
            value={inputs.BillsId}
            onChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                BillsId: e.target.value,
              }))
            }
          />
          <input
            className="mb-4 py-[6px] pr-2 h-9  rounded-t font-iran-reg text-[14px]"
            style={{
              borderBottom: "1.2px solid #49454F",
              backgroundColor: "rgba(233, 238, 239, 0.6)",
            }}
            placeholder="عنوان (مثال قبض آب مهر ماه)"
            value={inputs.BillsName}
            onChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                BillsName: e.target.value,
              }))
            }
          />
        </div>
      ) : null}

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-[14px] font-iran-medium text-center">
            ایا از حذف قبض مورد نظر اطمینان دارید؟
          </p>
          <div className="flex  flex-row-reverse justify-center w-full items-center">
            <p className=" font-iran-reg text-primary-main">بله</p>
            <Divider
              sx={{
                // width: "90%",
                height: 20,
                marginLeft: 5,
                marginRight: 5,
                backgroundColor: "#00000070",
              }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <p className=" font-iran-reg text-error-dark">خیر</p>
          </div>
        </Box>
      </Modal>

      <div className="w-[90%] mx-auto mt-auto mb-[40px] ">
        <FullButton
          text={page === 0 ? "افزودن قبض جدید" : "استعلام"}
          action={() => {}}
          isActive={page === 0 ? true : inputs.BillsId && inputs.BillsName}
        />
      </div>
    </div>
  );
}

export default Bills;
