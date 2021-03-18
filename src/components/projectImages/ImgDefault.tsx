import React from "react"
import Img from "gatsby-image"

const ImgDefault = ({ fluidImg, imgAlt }) => {
  return (
    <>
      <Img className="project-image" fluid={fluidImg} alt={imgAlt} />
    </>
  )
}

export default ImgDefault
