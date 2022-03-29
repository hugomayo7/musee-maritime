import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';


/*function srcset (image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
  }
}*/

export default function TitlebarImageList(props) {
  return (
    <ImageList cols={1} /*sx={{ width: 760, height: 450}}*/ rowHeight={'auto'}>
      <ImageListItem key="Subheader">
      </ImageListItem>
      {props?.images?.map((el, i) => (
        <ImageListItem key={el}>
          <img
            src={`${el[0]}?w=248&fit=crop&auto=format`}
            srcSet={`${el[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={el[1]}
            loading="lazy"
          />
          <ImageListItemBar
            title={el[1]}
            subtitle=''
            actionIcon={
              <Link
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${el[1]}`}
                to={"/bateaux/" + el[2]}
              >
                <InfoIcon />
              </Link>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

