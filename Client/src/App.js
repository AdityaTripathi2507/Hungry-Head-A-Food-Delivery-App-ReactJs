import React from 'react'
import {Route, Routes} from "react-router-dom" 
import { Main } from './containers'

const App = () => {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
        <Routes>
            <Route path="/*" element= ( < Main /> ) />
        </Routes>

        
    </div>
  
  
  
    )
}

export default App
