import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';

function PriceCard() {
  return (
    <div className=" relative  mb-10" id="price">
      <div className=" px-6 desktop:px-10">
        <img src="./src/Images/RedLine.png" />
        <p className=" mb-10 mt-4  font-peydaBlack  text-2xl text-text-light-color desktop:mb-[70px] desktop:mt-8 desktop:text-[40px] ">
          تعرفه های فایر مانیتور
        </p>
        <div className=" grid place-items-center justify-center gap-7 desktop:mb-14 desktopSm:flex desktopSm:flex-row">
          <div className="z-20 flex flex-col justify-between rounded-3xl bg-bg-dark-color-2 px-4 pb-6 tablet:w-[420px]  tablet:self-center tablet:px-10 desktop:pb-8  desktopSm:desktopSm:basis-1/3 desktopSm:self-stretch">
            <div>
              <div className="mb-10 mt-7 flex  flex-row   justify-between desktop:gap-8 desktopSm:-mx-5 ">
                <p className=" font-peydaBold text-3xl text-text-light-color tablet:text-4xl desktop:text-4xl">
                  مدل <span className=" text-main-color-1"> BASIC </span>
                </p>
                <StarIcon className=" text-yellow-star tablet:scale-150" />
              </div>
              <div className="list-inside font-peydaMedium text-base  text-text-light-color desktop:text-lg">
                <p className="mb-4 hidden tablet:block desktop:block">
                  امکانات :
                </p>
                <ul className=" pr-8">
                  <li className=" list-disc">دو ورودی حریق </li>
                  <li className=" list-disc">دو ورودی خطا</li>
                  <li className=" list-disc">
                    ارتباط از طریق سیم کارت تمامی اپراتور ها بر بستر اینترنت و
                    پیامک
                  </li>
                  <li className=" list-disc">سایز کوچک</li>
                  <li className=" list-disc">
                    سازگار با دستگاه های متعارف و آدرس پذیر
                  </li>
                  <li className=" list-disc">
                    اعلام نشانی دقیق محل حادثه با استفاده از نقشه
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3 ">
              <p className="mr-[-15px] mt-7 pr-2 font-peydaBlack text-4xl text-text-light-color tablet:text-[40px]">
                10,000,000
                <span className=" inline-block font-peyda text-[32px] tablet:inline-block desktop:inline">
                  تومان
                </span>
              </p>
              <Button
                variant="outlined"
                sx={{ borderRadius: '36px' }}
                className=" border-text-gray-color px-6 py-2 font-peyda text-lg text-text-light-color"
              >
                توضیحات{' '}
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: '36px' }}
                className=" border-text-gray-color px-6 py-2 font-peyda text-lg text-text-light-color"
              >
                خریداری دستگاه BASIC
              </Button>
            </div>
          </div>
          <div className="z-20 flex flex-col justify-between rounded-3xl bg-bg-dark-color-2 px-4 pb-6 tablet:w-[420px] tablet:self-center tablet:px-10 desktop:pb-8 desktopSm:basis-1/3 desktopSm:self-stretch">
            <div>
              <div className="mb-10 mt-7 flex  flex-row   justify-between desktop:gap-8 desktopSm:-mx-5 ">
                <p className=" font-peydaBold text-3xl text-text-light-color tablet:text-4xl desktop:text-4xl">
                  مدل <span className=" text-main-color-1"> PLUS </span>
                </p>
                <div className="flex tablet:gap-3">
                  <StarIcon className=" text-yellow-star tablet:scale-150 " />
                  <StarIcon className=" text-yellow-star tablet:scale-150 " />
                </div>
              </div>
              <div className="list-inside font-peydaMedium text-base  text-text-light-color desktop:text-lg">
                <p className="mb-4 hidden tablet:block desktop:block">
                  امکانات :
                </p>
                <ul className=" pr-8">
                  <li className=" list-disc">دو ورودی حریق </li>
                  <li className=" list-disc">دو ورودی خطا</li>
                  <li className=" list-disc">
                    ارتباط بر بستر اینترنت و اینترانت
                  </li>

                  <li className=" list-disc">
                    ارتباط از طریق سیم کارت ، کابل شبکه LAN،شبکه بیسیم WiFi و
                    فیبر نوری بر بستر اینترنت ، اینترانت و پیامک
                  </li>
                  <li className=" list-disc">
                    سازگار با دستگاه های متعارف و آدرس پذیر
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className=" mr-[-15px] mt-7 pr-2 font-peydaBlack text-4xl text-text-light-color tablet:text-[40px] ">
                15,000,000
                <span className="  inline-block font-peyda text-[32px] tablet:inline-block desktop:inline">
                  تومان
                </span>
              </p>
              <Button
                variant="outlined"
                sx={{ borderRadius: '36px' }}
                className=" border-text-gray-color px-6 py-2 font-peyda text-lg text-text-light-color"
              >
                توضیحات{' '}
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: '36px' }}
                className=" border-text-gray-color px-6 py-2 font-peyda text-lg text-text-light-color"
              >
                خریداری دستگاه BASIC
              </Button>
            </div>
          </div>
          <div className="z-20 flex flex-col justify-between rounded-3xl bg-main-color-2 px-4 pb-6 tablet:w-[420px] tablet:self-center tablet:px-10 desktop:pb-8 desktopSm:basis-1/3 desktopSm:self-stretch ">
            <div>
              <div className="mb-10 mt-7 flex flex-row justify-between tablet:gap-8  desktop:gap-8  desktopSm:-mx-5 ">
                <p className="font-peydaBold text-3xl text-text-light-color tablet:text-4xl desktop:text-4xl">
                  مدل <span className=" text-dark-star"> ADVACE</span>
                </p>
                <div className=" flex tablet:gap-3">
                  <StarIcon className="text-yellow-star tablet:scale-150 " />
                  <StarIcon className="text-yellow-star tablet:scale-150 " />
                  <StarIcon className="text-yellow-star tablet:scale-150 " />
                </div>
              </div>
              <div className="list-inside font-peydaMedium text-base  text-text-light-color desktop:text-lg">
                <p className="mb-4 hidden tablet:block desktop:block">
                  امکانات :
                </p>
                <ul className=" pr-8">
                  <li className=" list-disc">
                    تشخیص دقیق خطا و حریق و اعلام از طریق سامانه به تفکیک Zone و
                    دتکتور با ذکر موقیعت دقیق
                  </li>
                  <li className=" list-disc">
                    اعلام نشانی دقیق محل حادثه با استفاده از نقشه
                  </li>
                  <li className=" list-disc">
                    ارتباط از طریق سیم کارت ، کابل شبکه LAN،شبکه بیسیم WiFi و
                    فیبر نوری بر بستر اینترنت ، اینترانت و پیامک{' '}
                  </li>
                  <li className=" list-disc">
                    خروجی استارت دوره ای پمپ آب اطفا حریق{' '}
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3 ">
              <p className="   mr-[-15px] mt-7 pr-2 font-peydaBlack text-4xl text-text-light-color tablet:text-[40px] ">
                70,000,000{' '}
                <span className="  inline-block font-peyda text-[32px] tablet:inline-block desktop:inline">
                  تومان
                </span>
              </p>
              <Button
                variant="outlined"
                sx={{ borderRadius: '36px' }}
                className=" border-text-gray-color px-6 py-2 font-peyda text-lg text-text-light-color"
              >
                توضیحات{' '}
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: '36px' }}
                className=" border-text-gray-color px-6 py-2 font-peyda text-lg text-text-light-color"
              >
                خریداری دستگاه ADVANCE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute top-[50%] z-10 h-[364px]  w-full bg-bg-light-color-2 "></div>
    </div>
  );
}

export default PriceCard;
