import React from 'react'
import './App.css'

import Banner from './components/Banner'
import Navbar from './components/Navbar'
import PostContainer from './components/post/PostContainer'

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Banner/>
        <PostContainer/>
      </div>
    </div>
  );
}

export default App;
