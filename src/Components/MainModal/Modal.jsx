import CloseIcon from '@mui/icons-material/Close';

function Modal({ component, open, modal, closeModal, onClose }) {
  return (
    <div className="fixed right-0 top-0 z-[100]   flex  h-full w-full  items-center  justify-center backdrop-blur-sm tablet:top-0">
      <div className="  relative flex   w-4/5  flex-col   flex-wrap rounded-[36px] bg-bg-light-color p-4  font-peydaBlack">
        <button onClick={() => closeModal(modal)}>
          <CloseIcon className=" absolute right-4 top-4 z-[1000] scale-110 " />
        </button>
        <div className=" relative mt-5  flex h-full w-full justify-center self-center ">
          {component}
        </div>
      </div>
    </div>
  );
}

export default Modal;
