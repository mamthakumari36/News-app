import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pagesize = 9;

  const [progress,setProgress] = useState(0)
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}

          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} pagesize={pagesize} key="general" country='in' category="general" />} />
            <Route exact path='/business' element={<News setProgress={setProgress} pagesize={pagesize} key="business" country='in' category="business" />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} pagesize={pagesize} key="entertainment" country='in' category="entertainment" />} />
            <Route exact path='/general' element={<News setProgress={setProgress} pagesize={pagesize} key="general" country='in' category="general" />} />
            <Route exact path='/health' element={<News setProgress={setProgress} pagesize={pagesize} key="health" country='in' category="health" />} />
            <Route exact path='/science' element={<News setProgress={setProgress} pagesize={pagesize} key="science" country='in' category="science" />} />
            <Route exact path='/sports' element={<News setProgress={setProgress} pagesize={pagesize} key="sports" country='in' category="sports" />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} pagesize={pagesize} key="technology" country='in' category="technology" />} />
          </Routes>

        </Router>
      </div>
    )
  }

  export default App;


