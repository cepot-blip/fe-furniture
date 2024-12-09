/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

import useAllReview from '../../../hooks/review/useAllReview';
import { useByIdReview } from '../../../hooks/review/useByIdReview';
import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Fields/Input';
import Card from '../Card/Card';

function ReviewProduct() {
  const { id } = useParams();
  const { reviews } = useAllReview();
  console.log('reviews:', reviews);

  const filteredReviews = reviews.filter(
    (reviewers) => reviewers.product_id === Number(id),
  );

  return (
    <section className="py-8">
      <h1 className="text-3xl font-semibold mb-6">Reviewers and Feedback</h1>
      <div className="flex gap-4">
        {filteredReviews.map((reviewers) => (
          <Card
            key={reviewers.id}
            className="border flex flex-col justify-between h-auto border-gray-300 rounded-lg p-4 max-w-lg"
          >
            <Card.Body className="flex items-center justify-between">
              <div>
                <img
                  src={`https://api.multiavatar.com/${reviewers.user_id}.svg`}
                  className="w-10 h-10"
                />
              </div>
              <div className="flex items-center gap-2 mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={
                      index < reviewers.rating
                        ? 'text-orange-500'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
            </Card.Body>
            <Card.Footer className="text-gray-800 pt-3">
              {reviewers.review_content}
            </Card.Footer>
          </Card>
        ))}
      </div>

      <div className="flex flex-col pt-20 gap-5 justify-end">
        <h3 className="pb-2 text-lg font-base text-gray-500">
          Enter your review for this product
        </h3>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Write your review..."
            className="flex-1 py-3 px-4 border border-gray-300 rounded-lg max-w-lg"
          />
          <Button className="flex items-center justify-center gap-2 py-3 px-6 rounded-md bg-black text-white font-semibold shadow-lg">
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ReviewProduct;
