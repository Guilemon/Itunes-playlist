import React from 'react'
import Dotdotdot from 'react-dotdotdot'

const AlbumItem = (props,single,selected,menuToggle)=>{
    let data = props.single
    let selectedAlbum = props.selected
    let showMenu = props.menuToggle
    return (
        <div className="col-md-3 col-sm-12 px-0" onClick={()=>{selectedAlbum(data);showMenu(true)}}>
          <img className="mx-auto d-block img-fill" src={data["im:image"][2].label}/>
          <Dotdotdot clamp={3}>
            <h5 className="pt-3 px-3">
              {data["im:name"].label}
            </h5>
          </Dotdotdot>
          <Dotdotdot clamp={3}>
              <h6 className="py-2 px-3">
                {data["im:artist"].label}
              </h6>
          </Dotdotdot>
      </div>
    )
}
export default AlbumItem
