import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'
import BlogContainer from './components/blog/BlogContainer'

function App() {
  return (
    <Router>
      <div  className='bg-primary'>
        <Navbar/>
        <div className='container is-max-desktop mt-6 pb-6'>
          <BlogContainer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
