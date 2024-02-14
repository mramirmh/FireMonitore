import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './gallery.css';

const Images = [
  {
    id: '1',
    url: './src/Images/Gallery/1.png',
  },
  {
    id: '2',
    url: './src/Images/Gallery/2.png',
  },
  {
    id: '3',
    url: './src/Images/Gallery/3.png',
  },
  {
    id: '4',
    url: './src/Images/Gallery/4.png',
  },
  {
    id: '5',
    url: './src/Images/Gallery/5.png',
  },
  {
    id: '6',
    url: './src/Images/Gallery/6.png',
  },
];

function GalleryModal() {
  return (
    <div className="  h-full  w-full    justify-center pb-4">
      <div className="  mb-5  self-start  text-base text-second-color tablet:text-xl">
        آلبوم تصاویر فایر مانیتور
      </div>

      <Swiper
        style={{
          '--swiper-navigation-color': '#D9D9D9',
          '--swiper-navigation-size': '40px',
        }}
        id="main"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) =>
          console.log('Slide index change to :', swiper.activeIndex)
        }
        className=" cursor-auto  pb-10   "
      >
        {Images.map((image) => (
          <SwiperSlide
            key={image.id}
            className=" justify- flex h-full w-full flex-col items-center "
          >
            <div className=" flex flex-col items-center gap-3 ">
              <img
                src={image.url}
                alt={image.id}
                className="h-[180px] w-[180px]  tablet:h-[300px] tablet:w-[300px]  desktop:h-[350px] desktop:w-[350px]  "
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis architecto saepe a suscipit porro veniam ipsam
                tempora ut error eum accusamus praesentium modi dolor minima,
                exercitationem hic autem recusandae quasi?
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GalleryModal;

// function GalleryModal() {
//   return (
//     <>
//
//     </>
//   );
// }

// export default GalleryModal;
