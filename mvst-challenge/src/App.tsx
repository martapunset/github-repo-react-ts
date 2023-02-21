import { useState } from 'react'

import './App.css'
import { getRepositoriesByUser } from './api/getRepositories'
import { getUserInfo } from './api/getUserInfo';
import { RoundProfileImage } from './ui/RoundProfileImage';

function App() {
  const [count, setCount] = useState(0)
  getRepositoriesByUser("martapunset")
  
//getUserInfo("martapunset")

  return (
    <div className="App">
     <RoundProfileImage imageUrl="https://cdn.shopify.com/s/files/1/0567/2419/3370/products/Frame176876.jpg" size="200px"/>
    </div>
  )
}

export default App
