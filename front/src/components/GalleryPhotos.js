import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function GalleryPhotos (props) {
    return (
      <ImageList
      variant="quilted"
      cols={1}
      rowHeight={160}
    >
      {props?.images?.map((el, i) => (
        // <GalleryPhotoWidget image={el} key={i} />
        <ImageListItem key={el}>
          <img
            {...srcset(el, 121, 1, 1)}
            alt={"bateau"}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
