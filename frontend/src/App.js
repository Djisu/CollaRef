import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AssetScreen from './screens/AssetScreen'
import HomeScreen from './screens/HomeScreen'


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            CollaRef
          </a>
        </div>
        <div>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <Route path='/asset/:id' component={AssetScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>   
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  )
}

export default App
