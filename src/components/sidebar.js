import React from 'react'
import PopDetails from './popDetails'
const SideBar = (props,menu,toggle)=>{
    const showMenu = props.menu
    const albumToShow = props.selectedAlbum
    const menuExpanded = (showMenu)?'sidebar-menu-expanded':'sidebar-menu-collapsed'
    const sidebarClass = `sidebar ${menuExpanded}`

    return(
        <div className={sidebarClass}>
            <div className="close-btn" onClick={props.toggle}>x</div>
            <PopDetails details={albumToShow}/>
        </div>
        )
}

export default SideBar
