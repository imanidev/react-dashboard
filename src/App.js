import React from 'react'
import './App.css'
import Visitors from './Components/Counter'
import Reviews from './Components/Reviews';
import AverageRating from './Components/Average_Rating';
import Sidebar from './Components/Sidebar';
import SentimentAnalysis from './Components/Sentiment_Analysis';
import Counter from './Components/Counter';


function App() {
  return (
    <div>
      <Visitors />
      <Reviews />
      <AverageRating />
      <Sidebar />
      <SentimentAnalysis />
      <Counter />
      
    </div>
  )
}

export default App
