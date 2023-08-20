import React, { useState } from 'react'
import TopBar from '../../component/base/TopBar'
const EditBills = () => {

  const [inpute, setInpute] = useState<string>("")
  console.log(inpute);
  
  return (
    <div
      dir="rtl"
      style={{}}
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col font-iran-reg"
    >
        <TopBar title={"ویرایش قبض"} prevLink="/Bills"/>
        <div className="w-[90%] mx-auto flex flex-col  mt-6">
          <p className="font-iran-medium text-[13px] mb-3 text-light-2">
             شما می توانید جهت تمایز با سایر قبوض برای قبض خود یک عنوان دلخواه انتخاب نمایید.
          </p>
          <input
            id="filled-basic"
            className="mb-4 py-[6px] pr-2 h-9  rounded-t font-iran-reg text-[14px]"
            style={{
              borderBottom: "1.2px solid #49454F",
              backgroundColor: "rgba(233, 238, 239, 0.6)",
            }}
            placeholder="عنوان (مثال قبض آب مهر ماه)"
            value={inpute}
            onChange={e => setInpute(e.target.value)}
            autoComplete='off'
          />
            <button
              className="text-white bg-primary-main rounded-lg py-[10px] px-9 font-iran-ligh w-[full] mt-2"
            >
              تایید
            </button>
        </div>
    </div>
  )
}

export default EditBills