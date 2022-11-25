import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

export default function ImageThumbnail({ image, isActive, onClick, imgId }) {

    const handleClick = () => {
        onClick(image)
    }


    return (
        <>
            {
                <div className="gatsbySlider" onClick={handleClick}>
                    <GatsbyImage image={image.gatsbyImageData} />
                </div>
            }
        </>
    )
}