import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './NavElement.module.css'

export default function NavElement (props) {
  return (
    <>
      <Link
        to={props?.route}
        className={`${styles.route} ${useLocation().pathname.replace('/', '') === props?.route ? styles.selected : styles.normal}`}
      >
        {props?.name}
      </Link>
    </>
  )
}
