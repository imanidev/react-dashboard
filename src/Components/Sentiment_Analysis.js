import React from 'react'

const Sentiment_Analysis = () => {
  
  const analysis = [
    { name: 'Positive', value: 5 },
    { name: 'Negative', value: 1 },
    { name: 'Neutral', value: 4 },
  ]
  
  const analysisData = analysis.map((analysis, index) => ( 
    <div key={index} className='analysis-container'>
      <h3>{analysis.name}</h3>
      <p>{analysis.value}</p>
    </div>
  ))
  
  
  return (
    <div className='SentAnalysis'>
      <h2>Sentiment Analysis</h2>
      {analysisData}
      
    </div>
  )
}

export default Sentiment_Analysis
