import React from 'react'
import styles from "./BasicTitleWidget.module.css"

export default function BasicTitleWidget(props) {
  return (
    <>
    <span className={styles.title}>{props?.text}</span>
    </>
  )
}
