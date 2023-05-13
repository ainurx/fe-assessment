import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import PostContainer from './components/post/PostContainer'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='container is-max-desktop mt-6 pb-6'>
        <PostContainer/>
      </div>
    </Router>
  );
}

export default App;
