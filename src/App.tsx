import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import InstaPage from './components/InstaPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/insta" element={<InstaPage />} />
    </Routes>
  )
}

export default App
