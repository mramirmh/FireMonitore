import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="  flex  w-full  flex-col justify-center gap-2 desktop:gap-4">
      <p className=" whitespace-break-spaces text-lg text-second-color tablet:text-2xl desktopSm:text-3xl ">
        گزارشات مدیریتی
      </p>
      <div className="whitespace-break-spaces font-peyda text-xs tablet:text-lg desktopSm:text-xl   ">
        سامانه فایر مانیتور از زمان اغاز به کار توسط شما و شروع فعالیت، با جمع
        آوری داده های لازم در خصوص عملکرد تجهیزات اعلام حریق می تواند در مواقع
        مورد نیاز گزارشات لازم شامل: میزان بروز خطا یا حریق و همچنین میزان
        فعالیت یا عدم فعالیت تجهیزات را در بازه های زمانی خاص به جهت تحلیل بهتر
        از میزان بهره وری سامانه اعلام حریق در اختیار شما قرار دهد. که شایان ذکر
        است که در آینده و با پیاده سازی فاز های بعدی، گزارشات کامل تر و با
        جزییات بیشتر نیز به سامانه آنلاین اضافه خواهد شد که سعی تحلیلگران شرکت
        آداک بر این است که تمامی نیاز های شما از قسمت گزارشات به نحو احسن پاسخ
        داده شود.
      </div>
    </div>
  );
}
