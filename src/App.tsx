import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const InstaPage = lazy(() => import('./components/InstaPage'))

function App() {

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insta" element={<InstaPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
