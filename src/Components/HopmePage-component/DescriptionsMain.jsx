function DescriptionsMain() {
  return (
    <div className="my- mb-20 tablet:mb-20 tablet:mt-5 desktop:my-24 ">
      <div className="mb-10">
        <img src="./src/Images/RedLine.png" className="px-6 desktop:px-10" />
        <div className="flex flex-col justify-center gap-y-8 ">
          <p className=" mt-4 px-6 font-peydaBlack text-2xl  text-text-light-color tablet:mb-5 desktop:mb-14 desktop:mt-8 desktop:px-10 desktop:text-[40px]">
            شرح سخت افزاری مدار
          </p>
          <hr className=" -skew-y-6 text-text-gray-color" />
          <div className=" relative mx-5 self-center">
            <img
              src="./src/Images/plan2.png"
              alt="Plan2"
              className="relative object-center "
            />

            <img
              src="./src/Images/zoomPlan.png"
              className="absolute  right-[0%] top-0 scale-75  "
            />
          </div>

          <hr className=" w-[100wh] -skew-y-6 text-text-gray-color" />
        </div>
      </div>
      <div className=" flex flex-col gap-5 px-6 text-text-light-color desktop:mt-[8%]  desktop:flex-row desktop:px-10">
        <div className="flex flex-row   ">
          <span className=" ml-5 self-center rounded-[50%] border-2 border-main-color-1 bg-bg-light-color-3 px-5  py-3  text-center text-2xl font-medium desktop:py-4 desktop:text-[40px] desktop:font-black">
            1
          </span>
          <div className="self-center">
            <p className="font-peydaBlack text-base">سازگاری</p>
            <p className="font-peydaMedium text-sm">
              قابلیت اتصال به تمام برند ها{' '}
            </p>
          </div>
        </div>
        <div className="flex flex-row ">
          <span className=" ml-5 self-center rounded-[50%] border-2 border-main-color-1 bg-bg-light-color-3  px-5 py-3 text-center text-2xl   font-medium desktop:py-4 desktop:text-[40px] desktop:font-black ">
            2
          </span>
          <div className="self-center">
            <p className="font-peydaBlack text-base">قابلت اطمینان</p>
            <p className="font-peydaMedium text-sm">امنیت بالا در عملکرد </p>
          </div>
        </div>
        <div className="flex flex-row ">
          <span className=" ml-5 self-center rounded-[50%] border-2 border-main-color-1 bg-bg-light-color-3 px-5 py-3 text-center text-2xl font-medium   desktop:py-4 desktop:text-[40px] desktop:font-black ">
            3
          </span>
          <div className="self-center">
            <p className="font-peydaBlack text-base">هوشمند</p>
            <p className="font-peydaMedium text-sm">
              مانیتورینگ و گزارش گیری کامل{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionsMain;
