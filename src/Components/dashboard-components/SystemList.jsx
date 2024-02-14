import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import { Button } from '@mui/material';

function SystemList() {
  return (
    <div className=" bg-bg-light-color-4 mt-4 flex flex-col gap-4  rounded-3xl  p-4 tabletLg:w-1/2">
      <div className="  flex flex-col text-center">
        <p className=" text-2xl ">لیست سیستم ها</p>
        <div className=" mb-4 mt-10 flex flex-col items-center justify-center gap-8 self-center ">
          <DnsOutlinedIcon className=" scale-[3] text-text-gray-color-2" />
          <p className=" text-text-lightGray-color text-4xl">
            هنوز سیستم فعالی ندارید !{' '}
          </p>
          <p className=" text-text-lightGray-color ">
            سیستم خودتون رو همین الان سفارش بدید{' '}
          </p>
          <Button className=" rounded-full bg-main-color-1 px-6 py-4 font-peydaBold text-xl text-text-light-color ">
            +افزودن سیستم جدید
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SystemList;
