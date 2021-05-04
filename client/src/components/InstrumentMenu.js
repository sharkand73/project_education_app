import React from 'react';
import Carousel from 'react-multi-carousel' 
import 'react-multi-carousel/lib/styles.css';
//import "bootstrap/dist/css/bootstrap.css";
//import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
//import Trumpet from "../icons/Trumpet.png";
//import Double_Bass from "../icons/Double_Bass.png";
//import Electric_Guitar from "../icons/Electric_Guitar.png";
//import Saxophone from "../icons/Saxophone.png";
import "./InstrumentMenu.css";
import '../App.css';




const InstrumentMenu = ({instrumentList, onClick}) => {

    // const onClick = (event) => {
    //     //selectLesson(event.target.index);
    //     console.log(event.target.value);
    // }

    //const menu_images = {"Trumpet":"Trumpet", "Double Bass":"Double_Bass", "Electric Guitar":"Electric_Guitar", "Saxophone":"Saxophone"}

    const instrumentsItems = instrumentList.map((instrument, index) => {

        return (
        <>
            <img className='instrument-select bounce' onClick={onClick} index={index} key={index} src={require('../icons/'+instrument.icon).default} alt="" />
            <p>{instrument.name}</p>
        </>
        );
    })

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <Carousel
        responsive={responsive} 
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="menu-grid"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable>
            {instrumentsItems}
        </Carousel>
    )
};

export default InstrumentMenu;
