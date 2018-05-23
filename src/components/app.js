import React, {Component} from 'react'
import SideBar from './sidebar'
import AlbumItem from './albumListItem'
import Title from './title'

const itunesData = `https://itunes.apple.com/in/rss/topalbums/limit=100/json`

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            selectedAlbum:null,
            showMenu:false,
            isLoading:true
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    componentDidMount(){
        fetch(itunesData).then(resp => {return resp.json()}).then(response =>{
            let dataList = response.feed.entry.map((data)=>{
                return (
                    <AlbumItem key={data.id.attributes["im:id"]} single={data} selected={(selectedAlbum)=>{this.setState({selectedAlbum})}} menuToggle={(showMenu)=>{this.setState({showMenu})}}/>
                    )
            })
            this.setState({data:dataList, selectedAlbum:response.feed.entry[0],isLoading:false})
        })
    }
    toggleMenu(){
        this.setState({showMenu:false})
    }

    render(){
        const {isLoading, showMenu} = this.state
        if(isLoading){
            return <div className="Spinner"></div>
        }

      return (
        <div>
          <Title/>
          <SideBar menu={this.state.showMenu} toggle={this.toggleMenu} selectedAlbum={this.state.selectedAlbum}/>
          <div className="row">{this.state.data}</div>
        </div>
      )
    }
}


export default App
