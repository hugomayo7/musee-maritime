import styles from './HeaderWidget.module.css'

const HeaderWidget = props => {
  return <div className={`${styles.disposition}`}>{props.widgets}</div>
}

export default HeaderWidget
