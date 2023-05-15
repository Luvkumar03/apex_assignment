import React from 'react'
import styles from "./SideBar.module.css"
import { SidebarData } from './SidebarData'
export default function SideBar() {
  return (
    <div className={styles.SideBar}>
      {SidebarData.map((value,key)=>{
        return (
          <li>
            {value.title}
          </li>
        )
    
      })}
    </div>
  )
}
