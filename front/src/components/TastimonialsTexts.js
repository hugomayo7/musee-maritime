import React from 'react'
import TastimonialTextWidget from './widgets/TastimonialTextWidget'
import styles from './TastimonialsTexts.module.css'

export default function TastimonialsTexts (props) {
  return (
    <div className={styles.disposition}>
      {props?.texts?.map((el, i) => {
        return (
          <>
            <img
              src={
                'https://media.discordapp.net/attachments/948214708006166568/951534097782677594/d49f8670-0194-450c-86b9-bca7159df756.png'
              }
              alt='quote'
              className={styles.img}
            ></img>
            <div className={styles.text}>
            <TastimonialTextWidget key={i} text={el}/>
            </div>
          </>
        )
      })}
    </div>
  )
}
