import React from 'react'
import WithoutCleanup from './components/WithoutCleanup'
import WithCleanup from './components/WithCleanup'
const App = () => {
  return (
    <div>
      <WithoutCleanup/>
      <WithCleanup/>
    </div>
  )
}

export default App