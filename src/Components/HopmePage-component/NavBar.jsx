import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NAvBar() {
  return (
    <div className=" px-6 desktop:px-10">
      <div className="flex  justify-between  gap-x-3  ">
        <img
          src="./src/Images/LOGO.png"
          alt="Logo"
          className="h-8 self-center  tablet:h-[48px] tablet:px-6  desktop:h-[54px]"
        />
        <Link
          className="relative box-border flex  items-center   justify-center self-stretch truncate rounded-xl border border-text-gray-color text-center font-peyda text-xs  text-text-light-color before:absolute before:h-[20%] before:w-[1000%] before:animate-spin-very-slow before:bg-second-color hover:before:animate-spin tablet:min-w-[137px] tablet:basis-1/5 tablet:rounded-2xl tablet:text-sm desktop:text-lg desktop:before:animate-spin-slow"
          to="/login"
        >
          <button className=" relative  z-0  h-full w-full p-1 ">
            ورود به پنل و ثبت نام
            <p className=" z-30 "></p>
            <div className="absolute left-[50%] top-[50%] -z-10 mr-[-50%] h-[90%] w-[98%] translate-x-[-50%] translate-y-[-50%] rounded-xl  bg-bg-dark-color tablet:rounded-2xl"></div>
          </button>
        </Link>
      </div>
      <hr className=" mt-6 w-full text-line-color" />
    </div>
  );
}

export default NAvBar;
