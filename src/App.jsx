import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  // const [count, setCount] = useState(0)
  const [color,setColor] = useState("olive")

  return (
    
    <div className="w-full h-screen duration-200" style={{
      backgroundColor:color,
    }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 font-black">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{
            backgroundColor:"red",
          }} onClick={() => setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{
            backgroundColor:"blue",
          }} onClick={() => setColor("blue")}>blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{
            backgroundColor:"green",
          }} onClick={()=>setColor("green")}>green</button>
        </div>
      </div>
    </div>

  )
}

export default App
