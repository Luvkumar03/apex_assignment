import React from 'react'
import styles from "./SideBar.module.css"
import { SidebarData } from './SidebarData'
export default function SideBar() {
  return (
    <div className={styles.SideBar}>
      <ul className={styles.SideBarList}>
      {SidebarData.map((value,key)=>{
        return (
          <li className={styles.row}>
            <div id="title">
            {value.title}
            </div>
          </li>
        )
    
      })}
      </ul>
    </div>
  )
}
