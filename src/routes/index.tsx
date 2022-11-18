import React, { ReactElement, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../views/home/Home'))

const IndexRouter: React.FC = (): ReactElement => (
  <Router>
    <Suspense fallback={<p>Loading... </p>}>
      <Routes>
        <Route path='/' element={<Home />} index />
      </Routes>
    </Suspense>
  </Router>
)

export default IndexRouter
