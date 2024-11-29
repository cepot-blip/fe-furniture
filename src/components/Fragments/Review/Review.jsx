/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Star } from 'lucide-react';

import { useAllReview } from '../../../hooks/review/useAllReview';
import Card from '../Card/Card';

function Review() {
  const { createRev } = useAllReview();

  console.log(createRev);

  const dummyReview = [
    {
      user_id: 1,
      username: 'John Doe',
      product_id: 1,
      rating: 4,
      review_content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dicta distinctio quibusdam in maxime vel, sequi itaque quis modi! Perspiciatis, quas quisquam voluptas minus saepe porro ipsa placeat nihil! Esse corrupti nesciunt id vel, iure ab necessitatibus voluptatum eum iste.',
    },
    {
      user_id: 2,
      username: 'John Doe',
      product_id: 2,
      rating: 5,
      review_content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dicta distinctio quibusdam in maxime vel, sequi itaque quis modi! Perspiciatis, quas quisquam voluptas minus saepe porro ipsa placeat nihil! Esse corrupti nesciunt id vel, iure ab necessitatibus voluptatum eum iste.',
    },
    {
      user_id: 2,
      username: 'John Doe',
      product_id: 2,
      rating: 5,
      review_content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dicta distinctio quibusdam in maxime vel, sequi itaque quis modi! Perspiciatis, quas quisquam voluptas minus saepe porro ipsa placeat nihil! Esse corrupti nesciunt id vel, iure ab necessitatibus voluptatum eum iste.',
    },
  ];

  const renderStars = (rating) =>
    Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={index < rating ? 'text-orange-500' : 'text-gray-300'}
        size={20}
      />
    ));

  return (
    <section className="w-full py-16">
      <div className="flex flex-col justify-center gap-10">
        <div className="max-w-[600px] mx-auto flex flex-col justify-center items-center">
          <div className="bg-gray-200 py-2 px-3 rounded-full">
            <h4 className="text-orange-600 font-semibold">
              Review our Product
            </h4>
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-5xl font-semibold">What Our Customer Say</h2>
            <p className="text-gray-700 text-lg">
              Discover the Stories and Experiences of Our Delighted Customers
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="flex gap-6">
            {dummyReview.map((review) => (
              <Card
                className="border border-gray-300 rounded-lg shadow-md p-4"
                key={review.user_id}
              >
                {/* <Card.Header className="">
                  {review.user_id}
                </Card.Header> */}
                <Card.Body className="text-gray-700">
                  <p>{review.review_content}</p>
                </Card.Body>
                <Card.Footer className="flex items-center gap-2 justify-between pt-3">
                  <div className="flex gap-2 items-center">
                    <img
                      src={`https://api.multiavatar.com/${review.username}.svg`}
                      className="w-10 h-10"
                    />
                    <p className="text-sm font-semibold">{review.username}</p>
                  </div>

                  <div className="flex">{renderStars(review.rating)}</div>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
