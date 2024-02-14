import { Button } from '@mui/material';

function PropertiesMain() {
  return (
    <div className="flex flex-col  gap-[15%] px-6 pt-10 font-peyda tablet:my-5 tablet:flex-row tablet:justify-between tablet:gap-x-[5%] desktop:flex-row desktop:justify-between desktop:px-10">
      <div className="tablet:w-1/2 tablet:self-center desktop:self-center">
        <img src="./src/Images/RedLine.png" />
        <p
          className=" my-3 font-peydaBlack text-2xl text-text-light-color desktop:mt-8 desktop:text-2xl
          desktop:text-[40px]"
        >
          ویژگی های فایر مانیتور
        </p>
        <p
          className=" my-10 hidden  font-peyda text-2xl text-text-light-color tablet:my-5 tablet:block tablet:font-peydaMedium tablet:text-base desktop:block
          desktop:text-2xl"
        >
          ویژگی های فایر مانیتور ویژگی های فایر مانیتور
        </p>
        <Button
          variant="outlined"
          className=" mb-4 mt-4 hidden self-start rounded-full border-text-gray-color-2 px-3 font-peyda text-lg font-light text-text-gray-color-2 tablet:block tablet:text-sm desktop:block"
        >
          سفارش فایر مانیتور
        </Button>
      </div>
      <div className="flex flex-col justify-center  gap-3 desktop:w-4/5">
        <div className="  rounded-lg bg-bg-light-color px-3 py-5 text-center font-peyda text-xs  text-text-light-color desktop:px-6 desktop:py-10 desktop:text-base">
          <p className=" pb-3 font-peydaBlack text-sm desktop:text-3xl">
            اعلام فوری و آنلاین و پیامکی خطر و حریق در کمتر از 1 دقیقه
          </p>
          <div className="flex flex-row justify-between ">
            <div>
              <p className="my-3">ویژگی محصول</p>
              <p>ویژگی محصول</p>
            </div>
            <Button
              variant="outlined"
              className=" self-end rounded-full border-text-gray-color font-peyda text-xs text-text-light-color desktop:text-lg"
            >
              سفارش فایر مانیتور
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-3 ">
          <div className="rounded-lg bg-bg-light-color px-2 py-5  text-center font-peyda text-xs text-text-light-color  desktop:w-[45%] desktop:px-6 desktop:py-10 desktop:text-base">
            <p className=" xl pb-3 font-peydaBlack text-sm desktop:text-3xl">
              مانیتورینگ سنسورها
            </p>
            <p>دستگاه اطفا حریق ، با تشخیص خودکار و عملکرد سریع </p>
          </div>
          <div className="rounded-lg bg-bg-light-color px-2 py-5 text-center  font-peyda text-xs text-text-light-color desktop:w-[65%] desktop:px-6 desktop:py-10 desktop:text-base">
            <p className=" xl pb-3 font-peydaBlack text-sm desktop:text-3xl">
              دسترسی مستقیم آتش نشانی
            </p>
            <p> دستگاه اطفا حریق ، با تشخیص خودکار و عملکرد سریع </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesMain;
