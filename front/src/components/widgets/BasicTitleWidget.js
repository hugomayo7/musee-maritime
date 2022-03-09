import React from 'react'
import styles from "./BasicTitleWidget.module.css"

export default function BasicTitleWidget(props) {
  return (
    <>
    <div className={styles.title}>{props?.text}</div>
    </>
  )
}
