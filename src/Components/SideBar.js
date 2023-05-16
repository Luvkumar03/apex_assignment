import React from 'react'
import styles from "./SideBar.module.css"
import { SidebarData } from './SidebarData'
export default function SideBar() {
  return (
    <div className={styles.SideBar}>
      <ul className={styles.SideBarList}>
      {SidebarData.map((value,key)=>{
        return (
          <li 
          key={key}
          className={styles.row}
          id={window.location.pathname == value.link ? "active" : ""}
          onClick={()=>{window.location.pathname=value.link}}
          >
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
