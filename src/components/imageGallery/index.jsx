import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ImageThumbnail from "./imageThumbnails";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Slider from "react-slick";
import "react-lightbox-pack/dist/index.css";

const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    zoom: true,
    beforeChange: function (currentSlide, nextSlide) {
    },
    afterChange: function (currentSlide) {
    },
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                vertical: false,
                verticalSwiping: false,
            }
        },]
};


export function ImageGallery({ images, available }) {

    const [activeImageThumbnail, setactiveImageThumbnail] = React.useState(images[0])

    const handleclick = (image) => {
        setactiveImageThumbnail(image)
    }

    var filtered = images.filter(function (value, index, images) {
        if (index > 2 || index <= 3) {
            return images
        }
    });



    return (

        <>



            <div className="row cursor">

                <div className={`col-md-4 slickStyle thumbnailHeight`}>
                    <div className="d-none d-md-block">
                        <Slider {...settings}>
                            {images.slice(1).map((img => (
                                <ImageThumbnail image={img} onClick={handleclick} imgId={activeImageThumbnail.id} isActive={activeImageThumbnail.id === img.id} />
                            )))}
                        </Slider>
                    </div>
                    <div className="d-block d-md-none">
                        <SimpleReactLightbox>
                            <SRLWrapper>
                                <Slider {...settings}>
                                    {images.map((img => (
                                        <ImageThumbnail image={img} onClick={handleclick} imgId={activeImageThumbnail.id} isActive={activeImageThumbnail.id === img.id} />
                                    )))}
                                </Slider>
                            </SRLWrapper>
                        </SimpleReactLightbox>
                    </div>
                </div>

                <div className={`${images.length > 1 ? "col-md-8 position-relative d-none d-md-block" : "col-md-9 position-relative d-none d-md-block"}`}>
                    <SimpleReactLightbox>

                        <SRLWrapper>

                            <GatsbyImage
                                className="thumbnail_opacity"
                                objectFit="contain"
                                image={activeImageThumbnail.gatsbyImageData}
                            ></GatsbyImage>
                            <div className="invisible invisibleHeight" >
                                <div className="row">
                                    {images.slice(1).map((items) => (
                                        <div className="col-1">
                                            <GatsbyImage
                                                objectFit="contain"
                                                // objectPosi   tion="50% 50%"
                                                image={items.gatsbyImageData}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SRLWrapper>
                    </SimpleReactLightbox>
                </div>

            </div>
        </>
    )
}