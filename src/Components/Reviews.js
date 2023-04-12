import React from 'react'

function Reviews() {
  const reviewsData = [
    { 

      name: "John",
      comment: "This is a great product!",
      rating: 4.5
    },
    {
  
      name: "Jane",
      comment: "Changed my life!",
      rating: 5.0
    },
    // add more reviews here
  ];

  const reviews = reviewsData.map((review) => (
    <div key={review.id}>
      <h3>{review.name}</h3>
      <p>{review.comment}</p>
      <p>Rating: {review.rating}</p>
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