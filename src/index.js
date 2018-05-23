import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import PopDetails from './components/popDetails'
import LinesEllipsis from 'react-lines-ellipsis'

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
    }

    componentDidMount(){
        fetch(itunesData).then(result=>{ return result}).then(resp => {return resp.json()}).then(response =>{
            let tend = response.feed.entry.map((data)=>{
                return (
                    <div className="col-md-3 col-sm-12 px-0" key={data.id.attributes["im:id"]} onClick={()=>{this.setState({selectedAlbum:data,showMenu:true})}}>
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
            })
            this.setState({data:tend, selectedAlbum:response.feed.entry[0],isLoading:false})
        })
    }
    toggleMenu(){
        this.setState({showMenu:!this.state.showMenu})
    }

    render(){
        const {isLoading, showMenu} = this.state

        if(isLoading){
            return <div className="Spinner"></div>
        }

        const menuExpanded = (showMenu)?'sidebar-menu-expanded':'sidebar-menu-collapsed'

        const sidebarClass = `sidebar ${menuExpanded}`

        return (<div><div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">iTunes Trends</h1>
    </div><div className={sidebarClass}><PopDetails details={this.state.selectedAlbum} toggle={this.toggleMenu.bind(this)}/></div><div className="row">{this.state.data}</div></div>)
    }
 }

ReactDOM.render(
    <App/>
    ,document.getElementsByClassName('container')[0])
