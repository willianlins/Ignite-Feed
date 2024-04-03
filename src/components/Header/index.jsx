import styles from './Header.module.css'

import imgLogo from '../../assets/Ignite-logo.svg'

export function Header(){
  return(
    <div className={styles.header}>
      <img src={imgLogo} alt="" />
    </div>
  )
}
