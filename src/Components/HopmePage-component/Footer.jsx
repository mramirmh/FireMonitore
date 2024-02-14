function Footer() {
  return (
    <div className="   mx-4 mt-10 flex  flex-col gap-5 rounded-[36px] bg-text-light-color p-2 tablet:justify-between  tablet:px-3 desktop:justify-between desktop:px-14 desktop:py-10">
      <div className=" flex  flex-col justify-center self-center  ">
        <div className=" self-center border-b border-bg-dark-color  p-2 tablet:border-b-2 ">
          <img
            src="./src/Images/LOGO.png"
            alt="Logo"
            className="h-8 tablet:hidden desktop:hidden desktop:h-[100px]"
          />
          <img
            src="./src/Images/LOGO 2.png"
            alt="Logo"
            className="hidden tablet:mt-[-15px] tablet:block tablet:scale-75 desktop:block desktop:pl-3 "
          />
        </div>
      </div>
      <div className="mx-8 mt-6 flex flex-col justify-between  gap-10 text-center  font-peydaMedium text-sm tablet:flex-row tablet:pr-3 tablet:text-center tablet:text-lg desktop:pr-3 desktop:text-right desktop:text-lg">
        <div className="flex flex-col gap-5 text-right  tablet:w-1/2">
          <div className="flex  flex-col gap-1">
            <h1 className=" font-peydaBlack tablet:text-2xl">آدرس: </h1>
            <h3 className=" font-peydaBold tablet:text-xl">دفتر مرکزی :</h3>
            <p>
              شیراز - بلوار پاسداران - قبل از کوچه 68 - ساختمان نیک - طبقه 4 -
              واحد 11
            </p>
            <h3 className=" font-peydaBold tablet:text-xl">دفتر فنی :</h3>
            <p>شیراز - پارک علم و فناوری</p>
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className=" font-peydaBlack tablet:text-xl">تلفن تماس:</h1>
            <div className=" w-3/4 tablet:w-[100%] desktop:w-2/3">
              <p className=" flex justify-between gap-2  font-peydaBold tablet:text-xl">
                مدیریت:{' '}
                <span className=" font-peyda tablet:text-lg">09172037919</span>
              </p>
              <p className=" flex justify-between gap-2  font-peydaBold tablet:text-xl">
                پشتیبانی و فروش:{' '}
                <span className=" font-peyda tablet:text-lg">09173193950</span>
              </p>
              <p className=" flex justify-between gap-2   font-peydaBold tablet:text-xl">
                ثابت:{' '}
                <span className=" font-peyda tablet:text-lg">07138446833</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-right tablet:w-1/2">
          <h1 className=" font-peydaBlack tablet:text-2xl">مجوز ها :</h1>
          <ul className=" mr-8 list-outside list-disc font-peydaMedium tablet:text-lg">
            <li>سازمان تنظیم مقررات و ارتباطات رادیویی</li>
            <li>تاییدیه فنی سازمان فناوری اطلاعات</li>
            <li>دانش بنیان</li>
            <li>تأییدیه امنیتی افتا</li>
            <li>علامت استاندارد محصولات دانش بنیان</li>
          </ul>
          <div className=" flex flex-row  items-center justify-center  ">
            <div className=" w-[100px] tablet:flex tablet:h-[100px] tablet:items-center  ">
              <img src="./src/Images/enamad.png" alt="ای نماد" />
            </div>
            <div className="w-[100px] tablet:flex  tablet:items-center  ">
              <img
                src="./src/Images/daneshbonyan.png"
                alt="دانش بنیان"
                className=" scale-[.7]"
              />
            </div>
            <div className="w-[100px] tablet:flex tablet:h-[100px] tablet:items-center ">
              <img src="./src/Images/standard.png" alt="استاندارد" />
            </div>
            <div className="w-[100px] tablet:flex tablet:h-[100px] tablet:items-center ">
              <img
                src="./src/Images/afta.png"
                alt="سازمان فناوری اطلاعات"
                className=" scale-[1.2]"
              />
            </div>
            <div className="w-[100px] tablet:flex tablet:h-[100px] tablet:items-center ">
              <img
                src="./src/Images/tanzim.png"
                alt="سازمان مقررات و ارتباطات رادیویی"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="  flex scale-75 flex-row-reverse self-center tablet:gap-3">
        <a href="http://wa.me/+989172037919">
          <img
            src="./src/Images/icons8-whatsapp-50.png"
            alt="whatsapp"
            className=" scale-75 tablet:scale-100"
          />
        </a>
        <a href="http://t.me/+989172037919">
          <img
            src="./src/Images/icons8-telegram-50.png"
            alt="telegram"
            className=" scale-75 tablet:scale-100"
          />
        </a>
        <a href="http://www.instagram.com/adak__company/">
          <img
            src="./src/Images/icons8-instagram-50.png"
            alt="instagram"
            className=" scale-75 tablet:scale-100"
          />
        </a>
        {/* <WhatsAppIcon />
        // <TelegramIcon />
        <InstagramIcon /> */}
      </div>
      <div className="self-center text-center font-peydaBold text-xs tablet:text-lg">
        <p>طراحی و تولید توسط شرکت آداک </p>
        <a href="https://adak.website/">www.adak.website</a>
      </div>
    </div>
  );
}

export default Footer;
