/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PencilLine, Star } from 'lucide-react';

import { useAllReview } from '../../../hooks/review/useAllReview';
import { useByIdReview } from '../../../hooks/review/useByIdReview';
import { useCreateReviews } from '../../../hooks/review/useCreateReview';
import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Fields/Input';
import Card from '../Card/Card';
import FormReview from '../Review/FormReview';

function ReviewProduct() {
  const { id } = useParams();
  const { reviews, refetch } = useAllReview();
  const user = useSelector((state) => state.auth.userAuth);

  console.log('user:', user);

  const [showForm, setShowForm] = useState(false);

  const filteredReviews = reviews.filter(
    (reviewers) => reviewers.product_id === Number(id),
  );

  const handleSuccess = () => {
    refetch();
    setShowForm(false);
  };

  return (
    <section className="py-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-6">
            Reviewers and Feedback
          </h1>
        </div>

        <div>
          <Button
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-md bg-black text-white font-semibold shadow-lg max-w-lg"
            onClick={() => setShowForm(!showForm)}
          >
            <PencilLine />
            {showForm ? 'Cancel' : 'Create Review'} {/* iternary */}
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        {filteredReviews.map((reviewers) => (
          <Card
            key={reviewers.id}
            className="border flex flex-col justify-between h-auto border-gray-200 shadow-md rounded-lg p-5 max-w-md bg-white"
          >
            <Card.Header className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={`https://api.multiavatar.com/${reviewers.user_id}.svg`}
                  className="w-12 h-12 rounded-full shadow-sm"
                  alt="Reviewer Avatar"
                />
                <p className="font-semibold text-gray-800">{user?.loginData}</p>
              </div>
            </Card.Header>

            <Card.Body>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={
                      index < reviewers.rating
                        ? 'text-orange-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {reviewers.review_content}
              </p>
            </Card.Body>

            <Card.Footer className="text-gray-500 text-sm mt-4">
              {new Date(reviewers.created_at).toLocaleDateString()}
            </Card.Footer>
          </Card>
        ))}
      </div>

      {/* form */}
      {showForm && (
        <div className="flex flex-col pt-10 gap-5">
          <h3 className="pb-2 text-lg font-base text-gray-500">
            Enter your review for this product
          </h3>
          <FormReview product_id={Number(id)} onSuccess={handleSuccess} />
        </div>
      )}
    </section>
  );
}

export default ReviewProduct;
