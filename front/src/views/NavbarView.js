import React from 'react'
import NavElement from '../components/NavElement'
import styles from './NavbarView.module.css'

export default function NavbarView () {
  return (
    <div className={`${styles.disposition}`}>
      <NavElement route="" name="Acceuil"></NavElement>
      <NavElement route="bateaux" name="La flotte"></NavElement>
      <NavElement route="gallerie" name="Photos"></NavElement>
    </div>
  )
}
