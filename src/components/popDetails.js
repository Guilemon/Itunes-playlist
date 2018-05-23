import React from 'react'

let PopDetails = (props,details,toggle)=> {
    const album = props.details

    if(!album){
        return "...Loading"
    }
    /*
    ["im:releaseDate"].attribute.label
    ["im:itemCount"].label
    ["im:price"].label
    link.attributes.href
    rights.label
    data["im:image"][2].label
    category.attributes["im:id"]: "1264"
    ​​​​label: "Tamil"
    ​​​​scheme: "https://itunes.apple.com/in/genre/music-indian-tamil/id1264?uo=2"
    term: "Tamil"
    data["im:name"].label
    data["im:artist"].label
    */

    return (
        <div className="wrapper--sidebar">
        <div className="background-overlay" style={{backgroundImage:`url(${album["im:image"][2].label})`}}></div>
        <div className="container">
            <div className="row">
            <div className="close-btn" onClick={props.toggle}>x</div>
                <div className="col-md-6 col-sm-12">
                    <img className="mx-auto d-block" src={album["im:image"][2].label}/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h2 className="py-3">{album["im:name"].label}</h2>
                    <h5 className="py-2">Artist: {album["im:artist"].label}</h5>
                    <h5 className="py-2">Released on {album["im:releaseDate"].attributes.label}</h5>
                    <h5 className="py-2">Total Track: {album["im:itemCount"].label}</h5>
                    <h5 className="py-2"><a className="itunes-preview" href={album.link.attributes.href}>Preview on iTunes</a></h5>
                    <h5 className="py-2">Price: {album["im:price"].label}</h5>
                    <h5 className="py-2">Genre: {album.category.attributes.label}</h5>
                    <h6 className="pt-5">{album.rights.label}</h6>
                </div>
            </div>
        </div>
        </div>
        )
    }

export default PopDetails
