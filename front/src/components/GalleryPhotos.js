import React, { useState } from 'react'
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

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
        label='Get started'
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={true}
        mobile={true}
        style={{ position: 'absolute' }}
      >
        {props?.images?.map((el, i) => (
          // <GalleryPhotoWidget image={el} key={i} />
          <React.Fragment>
          <Slide
            key={0}
            media={
              <img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' alt='test' />
            }
            mediaBackgroundStyle={{ backgroundColor: "red" }}
            style={{ backgroundColor: "red" }}
            title='This is a very cool feature'
            subtitle='Just using this will blow your mind.'
          />
          <Slide
            key={1}
            media={
              <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: "blue" }}
            style={{ backgroundColor: "blue" }}
            title="Ever wanted to be popular?"
            subtitle="Well just mix two colors and your are good to go!"
          />
          </React.Fragment>
        ))}
      </AutoRotatingCarousel>

    </>
  )
}
