import React from 'react'

function Reviews() {
  const reviewsData = [
    { 
      name: "John Q.",
      comment: "Amazing product!",
      rating: 4.5,
      city: "New York"
    },
    {
  
      name: "Imani R.",
      comment: "Changed my life!",
      rating: 5.0,
      city: "Atlanta"
    },
    {
      name: "Jasmine B.",
      comment: "I love this product!",
      rating: 4.0,
      city: "San Francisco"
    },
    
    {
      name: "Trevor S.",
      comment: "It's okay.",
      rating: 3.0,
      city: "Seattle"
    }
  ];

  const reviews = reviewsData.map((review,index) => (
    <div key={index} className='review-container'> {/* use the curly braces to insert JS into JSX*/}
      <h3>{review.name}</h3>
      <p>{review.comment}</p>
      <p><b>Rating:</b>{review.rating}</p>
      <p><b>City:</b> {review.city }</p>
    </div>
  ));

  return (
    <div className='Reviews'>
      <h2 className='reviewsHeader'>Reviews</h2> 
      {reviews}
    </div>
  );
}

export default Reviews;