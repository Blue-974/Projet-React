import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Music from './components/Music'
import Album from './components/Album'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Music />} />
        <Route path="album/:id" element={<Album />} />
      </Routes>
    </Router>
  )
}

export default App
