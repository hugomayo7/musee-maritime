/*
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
            title={props.name[i]}
            subtitle={props.historic[i]}
          />
        ))}
      </AutoRotatingCarousel>

    </>
  )
}*/


import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


function srcset (image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size *
      rows}&fit=crop&auto=format&dpr=2 2x`
  }
}

export default function TitlebarImageList(props) {
  return (
    <ImageList sx={{ width: 760, height: 450}}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {props?.images?.map((el, i) => (
        <ImageListItem key={el.img}>
          <img
            {...srcset(el,121,1,1)}
            alt={props.name[i]}
            loading="lazy"
          />
          <ImageListItemBar
            title={props.name[i]}
            subtitle=''
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${props.name[i]}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

