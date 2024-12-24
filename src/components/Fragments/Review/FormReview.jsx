/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useCreateReviews } from '../../../hooks/review/useCreateReview';
import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Fields/Input';

function FormReview({ product_id, onSuccess }) {
  const { id } = useParams();
  const id_user = useSelector((state) => state.auth.userAuth.id);
  const { createReviewMutation } = useCreateReviews();

  const [loading, setLoading] = useState(false);
  const [senderData, setSenderData] = useState({
    user_id: id_user,
    product_id: Number(id),
    rating: '',
    review_content: '',
  });

  const handleCreateReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = {
      ...senderData,
      rating: Number(senderData.rating),
    };

    try {
      await createReviewMutation(dataToSend);
      onSuccess();
    } catch (error) {
      console.error(error.message, 'Failed to create review');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleCreateReview}>
      <div className="flex w-full gap-4 flex-col">
        <Input
          type="number"
          required="required"
          placeholder="Rating (1-5)"
          max="5"
          className="flex-1 py-3 px-4 border border-gray-300 rounded-lg max-w-lg"
          value={senderData.rating}
          onChange={(e) =>
            setSenderData({ ...senderData, rating: e.target.value })
          }
        />

        <Input
          type="text"
          required="required"
          placeholder="Write your review..."
          minLength={30}
          maxLength={100}
          className="flex-1 py-3 px-4 border border-gray-300 rounded-lg max-w-lg"
          value={senderData.review_content}
          onChange={(e) =>
            setSenderData({ ...senderData, review_content: e.target.value })
          }
        />

        <Button
          className="flex items-center justify-center gap-2 py-3 px-6 rounded-md bg-black text-white font-semibold shadow-lg max-w-lg"
          type="submit"
        >
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}

export default FormReview;
