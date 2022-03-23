import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


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
        <ImageListItem key={el.images}>
          <img
            src={`${el}?w=248&fit=crop&auto=format`}
            srcSet={`${el}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
                href={"/bateaux/" + props.id[i]}
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

