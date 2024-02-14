import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StarIcon from '@mui/icons-material/Star';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  return (
    <div className="  flex  w-full  flex-col justify-center gap-2 desktop:gap-4">
      <p className=" whitespace-break-spaces text-lg text-second-color tablet:text-2xl desktopSm:text-3xl ">
        {' '}
        نصب و راه اندازی{' '}
      </p>
      <div className="whitespace-break-spaces font-peyda text-xs tablet:text-lg  desktopSm:text-xl  ">
        نصب محصول فایر مانیتور کار ساده ای است اما نیاز کمی دانش فنی در حوزه
        سیستم های اعلام و اطفا حریق دارد و پیشنهادن ما این است که به منظور
        جلوگیری از بروز آسیب های احتمالی راه اندازی سامانه را به افراد متخصص در
        این حوزه بسپارید . در صورت نیاز به راهنمایی در نصب و راه اندازی سامانه
        با پشتیبانان ما در آداک در ارتباط باشید، همچنین مشخصات نمایندگی های
        مختلف فایر مانیتور در وبسایت قابل مشاهده است.
      </div>
    </div>
  );
}
