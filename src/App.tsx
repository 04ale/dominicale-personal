import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"


const Home = lazy(() => import('./Home'))
const InstaPage = lazy(() => import('./components/InstaPage'))

function App() {

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insta" element={<InstaPage />} />
      </Routes>
      <Analytics />
    </Suspense>
  )
}

export default App
