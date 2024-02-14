import { Button } from '@mui/material';
import { useState } from 'react';
import ReactPlayer from 'react-player';

function MovieCard() {
  const [hidePicture, setHidePicture] = useState(false);

  return (
    <div className="flex justify-center px-10   ">
      <div className=" mb-20  mt-20 flex flex-col justify-center self-center rounded-2xl bg-bg-light-color p-4  desktop:w-2/3 desktop:flex-row">
        <div
          className={
            hidePicture
              ? ' animate-slide  relative z-10 min-h-[150px] w-full tablet:min-h-[200px] desktop:min-h-[300px] '
              : ' relative z-10 h-[150px] w-full tablet:h-[200px] desktop:h-[300px] '
          }
        >
          <ReactPlayer
            controls
            url="./src/videos/firemonitor.mp4"
            type="video/mp4"
            playing={true}
            light
            // style={{ backgroundImage: './src/Images/coverVideo.jpg' }}
            width="100%"
            height="100%"
            style={{
              position: ' ',
              top: '0%',
              transform: 'translate(-0%,-0%)',
            }}
            onClickPreview={() => setHidePicture(!hidePicture)}
          />
          <div
            className={
              hidePicture
                ? ' hidden'
                : '  absolute top-[50%] -z-10 h-full w-full translate-y-[-50%] '
            }
          >
            <img
              src="./src/Images/coverVideo.jpg"
              className=" h-full w-full rounded-md"
              alt="coverVideo"
            />
          </div>
        </div>
        <div
          className={
            hidePicture
              ? 'hidden'
              : 'mx-4  mb-4 mt-5 desktop:my-0 desktop:self-center'
          }
        >
          <p className=" text-center font-peydaBlack text-sm  text-text-light-color  desktop:text-3xl">
            اطمینان و امنیت در هر لحظه با دستگاه هشدار حریق
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
