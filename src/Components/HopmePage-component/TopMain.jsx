import { Button, Modal } from '@mui/material';
import SouthIcon from '@mui/icons-material/South';

import Install from '../MainModal/modals-info/Install';
import Report from '../MainModal/modals-info/Report';
import Adaptability from '../MainModal/modals-info/Adaptability';
import Monitoring from '../MainModal/modals-info/Monitoring';
import GalleryModal from '../MainModal/modals-info/GalleryModal';
// import Modal from './MainModal/Modal';

import BtnAnimation from '../details/BtnAnimation';
import { useReducer, useState } from 'react';
import BtnTopMain from '../details/BtnTopMain';

const initialModal = [
  {
    id: 'install',
    title: 'نصب و راه اندازی ...',
    component: <Install />,
    open: false,
  },
  {
    id: 'report',
    title: 'گزارشات مدیرتی ...',
    component: <Report />,
    open: false,
  },
  {
    id: 'monitoring',
    title: 'مانیتورینگ آنلاین ...',
    component: <Monitoring />,

    open: false,
  },
  {
    id: 'adaptability',
    title: 'سازگاری ...',
    component: <Adaptability />,

    open: false,
  },
  {
    id: 'gallery',
    component: <GalleryModal />,

    open: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'open':
      return state.map((modal) => {
        if (modal.id === action.id) {
          return {
            ...modal,
            open: !modal.open,
            component: modal.component,
          };
        } else {
          return modal;
        }
      });
    case 'close':
      return {
        open: false,
        id: '',
        component: '',
      };
    case 'gallery':
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}

function TopMain() {
  const [modals, dispatch] = useReducer(reducer, initialModal);

  const openModal = function (modal) {
    dispatch({ type: 'open', id: modal.id });
  };

  console.log(Object.values(modals[1].id));

  return (
    <div className=" px-6 desktop:px-10 desktop:py-10 ">
      <div className=" flex flex-col   justify-between font-peyda tablet:flex-row tablet:items-center   desktop:flex-row   desktop:items-center ">
        <div className=" basis-3/5 text-text-light-color desktop:basis-3/4 ">
          <p className="mt-9  text-center font-peyda text-[25px] leading-[55px] desktop:text-right desktop:text-4xl desktop:leading-relaxed">
            فایر مانیتور
          </p>
          <p className="text-center font-peyda text-sm leading-6 desktop:text-right desktop:text-2xl desktop:leading-relaxed">
            سامانه هوشمند سازی و مانیتورینگ تجهیزات اعلان و اطفاء حریق
          </p>
          <hr className=" mt-6 text-line-color " />
          <div className=" flex flex-col items-center   justify-center gap-2.5 pt-4   desktop:flex desktop:flex-row ">
            {modals.map((modal, i) => (
              <BtnAnimation
                openModal={openModal}
                modal={modal}
                component={modal.component}
                open={modal.open}
                i={i}
              ></BtnAnimation>
            ))}
          </div>

          <img
            src="./src/Images/AngleLine-sm.png"
            className=" my-8 w-full tablet:hidden desktop:hidden"
            alt="AngleLine-sm"
          />
          <img
            src="./src/Images/AngleLine-lg.png"
            className=" mb-5 mt-8 hidden w-full tablet:block desktop:invisible desktop:-mb-[5%] "
            alt="AngleLine-lg"
          />
          <div className="flex flex-row gap-4 ">
            <div className="desktop:whitespace-nowrap">
              <span className="border-l p-1 font-peydaBold text-sm leading-9 desktop:pl-4 desktop:text-[32px]">
                دریافت کاتالوگ{' '}
              </span>
              <span className="mr-1 font-peyda text-xs desktop:mr-5 desktop:text-[17px]">
                محصول دانش بنیان شرکت آداک{' '}
              </span>
            </div>
            <div className=" hidden basis-full  bg-[url('./src/Images/AngleLine-lg.png')] bg-repeat-x desktop:block"></div>
          </div>
        </div>
        <div className="basis-1/5">
          <div className="my-8 flex  rounded-3xl    border-text-gray-color tablet:flex-col desktop:flex-col  ">
            {/* <img
              src="./src/Images/plan.png"
              alt="plan"
              className=" mx-2 w-[35%]   self-center tablet:my-5 tablet:w-[113px]  desktop:my-10 desktop:w-[113px]"
            /> */}

            {modals.map((modal, i) => (
              <BtnTopMain
                openModal={openModal}
                modal={modal}
                component={modal.component}
                open={modal.open}
                i={i}
              ></BtnTopMain>
            ))}

            {/* <BtnTopMain openModal={openModal} modal={modals} open={Object.values} /> */}
          </div>
          <Button
            variant="contained"
            className="flex w-full justify-between rounded-2xl bg-second-color py-5 text-bg-dark-color"
            href="#price"
          >
            <div className="flex flex-col  ">
              <p className="mb-2 text-right align-bottom font-peydaBlack text-xl">
                ثبت سفارش فایرمنیتور
              </p>
              <p className=" self-start text-right font-peyda text-base ">
                برای سفارش ، <span className="font-peydaBold "> کلیک کنید</span>
              </p>
            </div>
            <SouthIcon className=" scale-125 animate-bounce" />
          </Button>
        </div>
      </div>
      <hr className=" my-14 hidden text-line-color tablet:block desktop:block " />
    </div>
  );
}

export default TopMain;

// import { Button, Modal } from '@mui/material';
// import SouthIcon from '@mui/icons-material/South';

// import Install from './modals-info/Install';
// import Report from './modals-info/Report';
// import Adaptability from './modals-info/Adaptability';
// import Monitoring from './modals-info/Monitoring';
// import GalleryModal from './modals-info/GalleryModal';
// // import Modal from './MainModal/Modal';

// import BtnAnimation from './BtnAnimation';
// import { useReducer, useState } from 'react';
// import BtnTopMain from './details/BtnTopMain';

// const modals = [
//   {
//     id: 'install',
//     title: 'نصب و راه اندازی ...',
//     component: <Install />,
//   },
//   {
//     id: 'report',
//     title: 'گزارشات مدیرتی ...',
//     component: <Report />,
//   },
//   {
//     id: 'monitoring',
//     title: 'مانیتورینگ آنلاین',
//     component: <Monitoring />,
//   },
//   {
//     id: 'adaptability',
//     title: 'سازگاری ...',
//     component: <Adaptability />,
//   },
// ];

// function TopMain() {
//   const [openBtn, setOpenBtn] = useState(false);

//   function handleOpen() {
//     setOpenBtn(!openBtn);
//   }

//   // console.log(modals.at(1));

//   return (
//     <div className=" px-6 desktop:px-10 desktop:py-10 ">
//       <div className=" flex flex-col   justify-between font-peyda tablet:flex-row tablet:items-center  tablet:gap-[10%] desktop:flex-row   desktop:items-center ">
//         <div className=" text-text-light-color ">
//           <p className="mt-9  text-center font-peyda text-[25px] leading-[55px] desktop:text-right desktop:text-4xl desktop:leading-relaxed">
//             فایر مانیتور
//           </p>
//           <p className="text-center font-peyda text-sm leading-6 desktop:text-right desktop:text-2xl desktop:leading-relaxed">
//             سامانه هوشمند سازی و مانیتورینگ تجهیزات اعلان و اطفاء حریق
//           </p>
//           <hr className=" mt-6 text-line-color " />
//           <div className=" flex flex-col items-center   justify-center gap-2.5 pt-4   desktop:flex desktop:flex-row ">
//             {modals.map(
//               (modal, i) => (
//                 console.log(modal.component),
//                 (
//                   <BtnAnimation
//                     openModal={handleOpen}
//                     modal={modal}
//                     open={openBtn}
//                     i={i}
//                     key={modal.id}
//                   />
//                 )
//               ),
//             )}
//           </div>

//           <img
//             src="./src/Images/AngleLine-sm.png"
//             className=" my-8 w-full tablet:hidden desktop:hidden"
//           />
//           <img
//             src="./src/Images/AngleLine-lg.png"
//             className=" my-12 hidden w-full tablet:block desktop:block "
//           />
//           <span className="border-l p-1 font-peydaBold text-sm leading-9 desktop:pl-4 desktop:text-[32px]">
//             دریافت کاتالوگ{' '}
//           </span>
//           <span className="mr-1 font-peyda text-xs desktop:mr-5 desktop:text-[17px]">
//             محصول دانش بنیان شرکت آداک{' '}
//           </span>
//         </div>
//         <div className="tablet:w-max">
//           <div className="my-8 flex justify-center rounded-3xl border   border-text-gray-color tablet:flex-col desktop:flex-col  ">
//             <img
//               src="./src/Images/plan.png"
//               alt="plan"
//               className=" mx-2 w-[35%]   self-center tablet:my-5 tablet:w-[113px]  desktop:my-10 desktop:w-[113px]"
//             />
//           </div>
//           <Button
//             variant="contained"
//             className="flex w-full justify-between rounded-2xl bg-second-color py-5 text-bg-dark-color"
//             href="#price"
//           >
//             <div className="flex flex-col  ">
//               <p className="mb-2 text-right align-bottom font-peydaBlack text-xl">
//                 ثبت سفارش فایرمنیتور
//               </p>
//               <p className=" self-start text-right font-peyda text-base ">
//                 برای سفارش ، <span className="font-peydaBold "> کلیک کنید</span>
//               </p>
//             </div>
//             <SouthIcon className=" scale-125 animate-bounce" />
//           </Button>
//         </div>
//       </div>
//       <hr className=" my-14 hidden text-line-color tablet:block desktop:block " />
//     </div>
//   );
// }

// export default TopMain;
