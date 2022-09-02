import Slider from 'react-slick';

const SimpleSlider = ({ elements = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {elements.map((elements, index) => {
        return <h1 key={index}>{elements}</h1>;
      })}
    </Slider>
  );
}

export default SimpleSlider;

