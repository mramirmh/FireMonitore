import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Alarms from '../dashboard-components/Alarms';
import SystemList from '../dashboard-components/SystemList';
import { Link, NavLink } from 'react-router-dom';
import Map from '../dashboard-components/Map';
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useState } from 'react';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Dashboard() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className=" relative flex h-full w-full flex-col justify-center gap-4 bg-bg-dark-color p-5  tabletLg:flex-row tabletLg:justify-between">
      <div className=" flex flex-row items-center justify-between pb-5 pt-4 tabletLg:hidden">
        <div className="  flex flex-row items-center  gap-3   ">
          <button onClick={handleOpen}>
            <MenuOpenIcon className=" text-text-light-color" />
          </button>

          <img
            src="./src/Images/dashboard/profileSimpleSm.png"
            className=" scale-75"
          />
          <NotificationsActiveOutlinedIcon className=" text-text-light-color" />
          <ModeCommentOutlinedIcon className=" text-text-light-color" />
        </div>

        <Link to="/login" className=" flex flex-row items-center gap-2 ">
          <p className=" font-peydaBold text-text-light-color">فایرمنیتور</p>
          <img
            src="./src/Images/dashboard/LOGOSm.png"
            className=" rounded-md bg-bg-light-color-3 p-1"
          />
        </Link>
      </div>

      <div className="    hidden  flex-col justify-between text-text-light-color tabletLg:flex">
        <div className=" flex flex-col items-center justify-center gap-3 self-center ">
          <Link to="/" className=" flex flex-col items-center gap-2 ">
            <img
              src="./src/Images/dashboard/LOGOLg.png"
              className="  rounded-md bg-bg-light-color-3 p-1"
            />
            <p className="  font-peydaBold text-text-light-color ">
              فایرمنیتور
            </p>
          </Link>
          <DarkModeOutlinedIcon className=" scale-125 text-text-light-color" />
        </div>
        <div className=" flex flex-col items-center justify-center gap-8">
          <NavLink
            to="/dashboard"
            className=" -mb-2 self-center rounded-full  text-main-color-2 "
          >
            <button className="group relative flex flex-row items-center gap-2 rounded-lg bg-bg-light-color p-2">
              <DashboardOutlinedIcon />
              <p
                className="bg-blue-500 text-white  
            invisible absolute ml-4  
         mt-2 translate-y-5 transform whitespace-nowrap 
           px-5 py-1 text-text-light-color transition
            ease-in-out group-hover:visible group-hover:-translate-x-7 group-hover:translate-y-2 group-hover:rounded-md group-hover:bg-bg-light-color group-hover:bg-opacity-70 group-hover:backdrop-invert-0"
              >
                داشبورد
              </p>
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="group relative flex flex-row items-center gap-2 rounded-lg bg-bg-light-color p-2">
              <DnsOutlinedIcon />
              <p
                className="bg-blue-500 text-white  
            invisible absolute   
         mt-2 translate-y-5 transform whitespace-nowrap 
           px-5 py-1 text-text-light-color transition
            ease-in-out group-hover:visible group-hover:-translate-x-7 group-hover:translate-y-2 group-hover:rounded-md group-hover:bg-bg-light-color group-hover:bg-opacity-70 group-hover:backdrop-invert-0"
              >
                سیستم ها
              </p>
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="group relative flex flex-row items-center gap-2 rounded-lg bg-bg-light-color p-2">
              {' '}
              <InsertChartOutlinedIcon />
              <p
                className="bg-blue-500 text-white  
            invisible absolute ml-4  mt-2
         translate-y-5 transform whitespace-nowrap  
           px-5 py-1 text-text-light-color transition
            ease-in-out group-hover:visible group-hover:-translate-x-7 group-hover:translate-y-2 group-hover:rounded-md group-hover:bg-bg-light-color group-hover:bg-opacity-70 group-hover:backdrop-invert-0"
              >
                {' '}
                مانیتورینگ
              </p>
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="group relative flex flex-row items-center gap-2 rounded-lg bg-bg-light-color p-2">
              {' '}
              <WidgetsOutlinedIcon />
              <p
                className="bg-blue-500 text-white  
            invisible absolute ml-4  mt-2
         translate-y-5 transform whitespace-nowrap  
           px-5 py-1 text-text-light-color transition
            ease-in-out group-hover:visible group-hover:-translate-x-7 group-hover:translate-y-2 group-hover:rounded-md group-hover:bg-bg-light-color group-hover:bg-opacity-70 group-hover:backdrop-invert-0"
              >
                دسترسی ها
              </p>
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="group relative flex flex-row items-center gap-2 rounded-lg bg-bg-light-color p-2">
              {' '}
              <SpeakerNotesOutlinedIcon />
              <p
                className="bg-blue-500 text-white  
            invisible absolute ml-4  mt-2
         translate-y-5 transform whitespace-nowrap  
           px-5 py-1 text-text-light-color transition
            ease-in-out group-hover:visible group-hover:-translate-x-7 group-hover:translate-y-2 group-hover:rounded-md group-hover:bg-bg-light-color group-hover:bg-opacity-70 group-hover:backdrop-invert-0"
              >
                {' '}
                تیکت
              </p>
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="group relative flex flex-row items-center gap-2 rounded-lg bg-bg-light-color p-2">
              {' '}
              <FactCheckOutlinedIcon />
              <p
                className="bg-blue-500 text-white  
            invisible absolute ml-4  
         mt-2 translate-y-5 transform whitespace-nowrap 
           px-5 py-1 text-text-light-color transition
            ease-in-out group-hover:visible group-hover:-translate-x-7 group-hover:translate-y-2 group-hover:rounded-md group-hover:bg-bg-light-color group-hover:bg-opacity-70 group-hover:backdrop-invert-0"
              >
                {' '}
                لیست درخواست ها
              </p>
            </button>
          </NavLink>
        </div>

        <div className="flex flex-col items-center self-center font-peydaMedium ">
          <img
            src="./src/Images/dashboard/profileSimpleSm.png"
            className=" w-[40px] "
          />
          <p className=" whitespace-nowrap text-sm"> محمد حسینی</p>
        </div>
      </div>
      <div className="w-full gap-4 rounded-3xl bg-text-light-color px-3 py-5 font-peydaBold tabletLg:p-8">
        <p className=" tabletLg:font-peydaBlack tabletLg:text-3xl">
          داشبورد کاربر
        </p>
        <div className=" flex flex-col ">
          <Alarms />
          <div className="flex-row gap-3 tabletLg:flex tabletLg:justify-between">
            <SystemList />
            <Map />
          </div>
        </div>
      </div>
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <div className=" absolute right-0 top-0 h-full w-1/2 bg-bg-dark-color p-4">
            <div className=" flex h-full flex-col justify-between">
              <div className=" flex flex-col gap-4 font-peyda text-sm">
                <div className=" mb-4 flex flex-row justify-between">
                  <MenuOpenIcon />
                  <button>
                    <CloseIcon onClick={handleClose} />
                  </button>
                </div>
                <NavLink
                  to="/dashboard"
                  className={
                    'active'
                      ? ' -mb-2 rounded-full bg-bg-light-color p-2 text-main-color-2 '
                      : ''
                  }
                >
                  <button className=" flex flex-row items-center gap-2">
                    <DashboardOutlinedIcon />
                    <p className={'active' ? ' text-text-light-color ' : ''}>
                      داشبورد
                    </p>
                  </button>
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isAcive }) =>
                    isAcive ? ' text-main-color-2' : ''
                  }
                >
                  <button className=" flex flex-row items-center gap-2">
                    <DnsOutlinedIcon />
                    <p>سیستم ها</p>
                  </button>
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isAcive }) =>
                    isAcive ? ' text-main-color-2' : ''
                  }
                >
                  <button className=" flex flex-row items-center gap-2">
                    <InsertChartOutlinedIcon />
                    <p>مانیتورینگ</p>
                  </button>
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isAcive }) =>
                    isAcive ? ' text-main-color-2' : ''
                  }
                >
                  <button className=" flex flex-row items-center gap-2">
                    <WidgetsOutlinedIcon />
                    <p>دسترسی ها</p>
                  </button>
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isAcive }) =>
                    isAcive ? ' text-main-color-2' : ''
                  }
                >
                  <button className=" flex flex-row items-center gap-2">
                    <SpeakerNotesOutlinedIcon />
                    <p> تیکت</p>
                  </button>
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isAcive }) =>
                    isAcive ? ' text-main-color-2' : ''
                  }
                >
                  <button className=" flex flex-row items-center gap-2">
                    <FactCheckOutlinedIcon />
                    <p> لیست درخواست ها</p>
                  </button>
                </NavLink>
              </div>
              <div className="flex flex-col items-center self-center font-peydaMedium ">
                <img
                  src="./src/Images/dashboard/profileSimpleSm.png"
                  className=" w-[40px] "
                />
                <p>محمد حسینی</p>
              </div>
            </div>
          </div>
        </Backdrop>
      </div>
    </div>
  );
}

export default Dashboard;
