import React from 'react'

function Reviews() {
  const reviewsData = [
    { 

      name: "John Q.",
      comment: "This is a great product!",
      rating: 4.5,
      city: "New York"
    },
    {
  
      name: "Imani R.",
      comment: "Changed my life! Highly recommend!",
      rating: 5.0,
      city: "Atlanta"
    },
    {
      name: "Jasmine B.",
      comment: "I love this product!",
      rating: 4.0,
      city: "Salt Lake City"
    },
    
    {
      name: "Trevor S.",
      comment: "It's okay. I don't really like it.",
      rating: 3.0,
      city: "New York"
    }
  ];

  const reviews = reviewsData.map((review) => (
    <div>
      <h3>{review.name}</h3>
      <p>{review.comment}</p>
      <p>Rating: {review.rating}</p>
      <p><b>City:</b> {review.city }</p>
    </div>
  ));

  return (
    <div>
      <h2>Reviews</h2>
      {reviews}
    </div>
  );
}

export default Reviews;