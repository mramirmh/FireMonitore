import Modal from '../MainModal/Modal';

function BtnAnimation({
  modal,
  closeModal,
  openModal,
  onModal,
  open,
  component,
  i,
}) {
  return (
    <div
      className={
        i > 3
          ? 'hidden'
          : 'relative box-border flex items-center justify-center   self-stretch truncate rounded-full border border-text-gray-color text-center font-peyda text-xs  text-text-light-color before:absolute before:h-[20%] before:w-[1000%] before:animate-spin-very-slow before:bg-second-color hover:before:animate-spin tablet:text-lg desktop:basis-1/4 desktop:before:animate-spin-slow'
      }
      // className=" relative box-border flex items-center justify-center   self-stretch truncate rounded-full border border-text-gray-color text-center font-peyda text-xs  text-text-light-color before:absolute before:h-[20%] before:w-[1000%] before:animate-spin-very-slow before:bg-second-color hover:before:animate-spin tablet:text-lg desktop:basis-1/4 desktop:before:animate-spin-slow"
    >
      <button className=" relative z-0  h-full w-full p-1 ">
        <p className=" z-30" onClick={() => openModal(modal)}>
          {' '}
          {modal.title}
        </p>
        <div className="absolute left-[50%] top-[50%] -z-10 mr-[-50%] h-[90%] w-[98%] translate-x-[-50%] translate-y-[-50%] rounded-full  bg-bg-dark-color"></div>
      </button>
      {open ? (
        <Modal component={component} closeModal={openModal} modal={modal} />
      ) : (
        ''
      )}
    </div>
  );
}

export default BtnAnimation;
