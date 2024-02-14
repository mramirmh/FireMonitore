import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

function AllAlarms() {
  return (
    <div className=" mt-10 flex flex-col items-center justify-center gap-8">
      <GppGoodOutlinedIcon className="  scale-[3] text-text-gray-color-2" />
      <p className=" text-text-lightGray-color text-4xl">
        هشدار فعالی وجود ندارد
      </p>
      <p className="text-text-lightGray-color mb-4 ">همه چی خوب پیش میره :)</p>
    </div>
  );
}

export default AllAlarms;
