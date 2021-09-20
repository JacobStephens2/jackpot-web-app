// Step 1: Import React
import * as React from 'react'
import D6 from '../components/D6.js'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>The Game Well Played</h1>
      <h2>Web App for Playing Board Games</h2>
      <p>You can use this web app to play board games.</p>
      <D6 numberOfDice="1" />
    </main>
  )
}

// Step 3: Export your component
export default IndexPage