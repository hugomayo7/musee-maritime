import React, { useState } from 'react'
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const imgStyle = {
  width: "250%",
  height: "100%",
};

function srcset (image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size *
      rows}&fit=crop&auto=format&dpr=2 2x`
  }
}

export default function GalleryPhotos (props) {
  const [handleOpen, setHandleOpen] = useState({ open: false })
  const handleClick = () => {
    setHandleOpen({ open: true })
  }

  return (
    <>
      <ImageList variant='quilted' cols={1} rowHeight={160}>
        {props?.images?.map((el, i) => (
          // <GalleryPhotoWidget image={el} key={i} />
          <ImageListItem key={el}>
            <img {...srcset(el, 121, 1, 1)} alt={'bateau'} loading='lazy' onClick={handleClick} />
          </ImageListItem>
        ))}
      </ImageList>
      <AutoRotatingCarousel
        label='retour'
        ButtonProps={{size:'medium'}}
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: true })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={true}
        mobile={true}
        style={{ position: 'absolute' }}
      >
        {props?.images?.map((el, i) => (
          // <GalleryPhotoWidget image={el} key={i} />
          
          <Slide
            media={
              <img src={el} alt='test' style={imgStyle} />
            } 
            mediaBackgroundStyle={{ url: {el} }}
            style={{ backgroundColor: "#38679D" }}
          />
        ))}
      </AutoRotatingCarousel>

    </>
  )
}
