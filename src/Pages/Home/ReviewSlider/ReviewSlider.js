import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewItem from "./ReviewItem";

const ReviewSlider = () => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch("comment.json")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  return (
    <div className="py-10">
      <div className="my-10">
        <h1 className="text-5xl font-bold text-center text-cyan-900 mb-8">
          What Our Client Say
        </h1>
        <p className="lg:w-1/2 mx-auto text-center text-gray-500">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero at tempus, blandit posuere ligula varius congue cursus porta
          feugiat
        </p>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="grid grid-cols-1 lg:grid-cols-3"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={true}
        rewindWithAnimation={false}
        rtl
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {comment.map((comment) => (
          <ReviewItem key={comment.id} comment={comment} />
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewSlider;
