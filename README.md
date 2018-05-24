# Itunes-playlist

This App utilizes Reactjs library, bootstrap framework and iTunes API.
Webpack was used for bundling the app modules together.

* Note: Nodejs Server file is added just for deployment on heroku. The development was done using Webpack Dev Server.

## APP Structure and Description
* **Webpack config file:**
    This file contains configuration setting for webpack dev server, module loaders for es6 to es5 traspilation and plugins for production build.

* **index.html file:**
    This file contains static markup with stylesheet and js files imported along with one root container div declared for attaching the react components to.

* **bundle.js file**:
    output js file generated by webpack by compiling modular es6 code to es5.

* **package.json file**:
    contains all dependent node modules, scripts and app information

* **Style Folder:**
      style.css - contains additional css rules for app designing

* **Src Folder:** This folder contains the modular js files.

## The design of App is as follows:
* All component files are present in component folders.
```Index.js``` file ,which is located outside components folder, calls to root React Component defined in ```app.js``` file and using ```react-dom``` render method, attaches the app component to root html tag(defined in ```index.html```)

* In App.js file, the api data is fetched and passed to a component loop.

The component loop result is stored in a variable and called in app's render function.

* On clicking the grid component, a full page sidebar pop ups.

To handle its transitions, a state ```showMenu``` is used. This state is passed as prop to Sidebar component as prop. In ```sidebar.js```, the passed prop is used to determine class to be applied on sidebar component. CSS transition property is used for sidebar transitions on click of grid element.

* The sidebar component contains additional information regarding the clicked album.

This is achived by assigning the data of clicked element to ```selectedAlbum``` state. On Click, the ```selectedAlbum``` state is updated with clicked elements data dynamically. The element and action for this is mentioned in ```albumListItem.js``` file. It also assigns ```showMenu``` state to true which triggers the sidebar to be activated.

The ```selectedAlbum``` state is passed as prop to ```popDetails.js``` file where the particular information is extracted and put in template file.

* A spinner is added for slow connections. Its occurence is handled by ```isLoading``` state.
