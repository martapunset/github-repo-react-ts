import { useState } from 'react'

import './App.css'
import { getRepositoriesByUser } from './api/getRepositories'
import { getUserInfo } from './api/getUserInfo';

function App() {
  const [count, setCount] = useState(0)
  getRepositoriesByUser("martapunset")
    
 
//getUserInfo("martapunset")

  return (
    <div className="App">
   
    </div>
  )
}

export default App
