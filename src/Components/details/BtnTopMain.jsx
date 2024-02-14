import { Button } from '@mui/material';
import Modal from '../MainModal/Modal';
import GalleryModal from '../MainModal/modals-info/GalleryModal';

function BtnTopMain({
  modal,
  closeModal,
  openModal,
  onModal,
  open,
  component,
  i,
}) {
  return (
    <>
      {i === 4 ? (
        <Button className="relative flex h-full w-full flex-col   rounded-3xl bg-main-color-2 py-6  pl-1 text-text-light-color ">
          <div
            className=" absolute right-0 top-0 h-full w-full"
            onClick={() => openModal(modal)}
          ></div>
          <div className="  text-center  font-peydaBlack text-text-light-color ">
            <span className=" font-peydaBlack text-lg desktop:text-xl">
              آلبوم تصاویر سامانه فایرمانیتور
            </span>
          </div>
          {open ? (
            <Modal component={component} closeModal={openModal} modal={modal} />
          ) : (
            ''
          )}
        </Button>
      ) : (
        ''
      )}
    </>
  );
}

export default BtnTopMain;
