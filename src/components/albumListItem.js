import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

const AlbumItem = (props,single,selected,menuToggle)=>{
    let data = props.single
    let selectedAlbum = props.selected
    let showMenu = props.menuToggle
    return (
        <div className="col-md-3 col-sm-12 px-0" onClick={()=>{selectedAlbum(data);showMenu(true)}}>
          <img className="mx-auto d-block img-fill" src={data["im:image"][2].label}/>
          <LinesEllipsis
            className="pt-3 px-3"
            text={data["im:name"].label}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
            component="h5"
          />
          <LinesEllipsis
            className="py-2 px-3"
            text={data["im:artist"].label}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
            component="h6"
          />
      </div>
    )
}
export default AlbumItem
