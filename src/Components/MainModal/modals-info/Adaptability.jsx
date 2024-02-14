import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function BasicModal() {
  return (
    <div className="  flex  w-full  flex-col justify-center gap-2 desktop:gap-4">
      <p className=" whitespace-break-spaces text-lg text-second-color tablet:text-2xl desktopSm:text-3xl ">
        سازگاری{' '}
      </p>
      <div className="whitespace-break-spaces font-peyda text-xs tablet:text-lg desktopSm:text-xl   ">
        یکی از متداول ترین سوالاتی که افراد در زمان خرید "فایر مانیتور" با آن
        مواجه می شوند این است که آیا این سامانه با تجهیزات نصب شده در ساختمان
        آنها سازگاری دارد یا خیر ؟
        <p>
          و پاسخ ما به این سوال این است که : بله ! سامانه فایر مانیتور با بهره
          بری از دانش فنی متخصصان شرکت آداک نگارگران نیکا پس از تحلیل گسترده
          بازار و شناخت تجهیزات مورد استفاده در ایران اقدام به طراحی و تولید این
          سامانه کرده اند و محصول نهایی تولید شده با 98% از دستگاه های مورد
          استفاده در بازار ایران اعم از مدل های متعارف و آدرس پذیر سازگار می
          باشد که شما دراین خصوص میتوانید با تماس با واحد پشتیبانی از جزییات این
          امر مطلع گردید.
        </p>
      </div>
    </div>
  );
}
