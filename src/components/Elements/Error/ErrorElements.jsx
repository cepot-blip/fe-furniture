/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import React from 'react';
import { useRouteError } from 'react-router-dom';

import Button from '../Button/Button';

function ErrorElements() {
  const error = useRouteError();

  console.error('error:', error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We're sorry for the inconvenience. Here's what we know:
      </p>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        {error?.status && (
          <p className="text-gray-800">
            <span className="font-semibold">Status:</span> {error.status}
          </p>
        )}
        {error?.statusText && (
          <p className="text-gray-800">
            <span className="font-semibold">Message:</span> {error.statusText}
          </p>
        )}
        {error?.message && (
          <p className="text-gray-800">
            <span className="font-semibold">Details:</span> {error.message}
          </p>
        )}
      </div>
      <Button
        className="mt-6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </Button>
    </div>
  );
}

export default ErrorElements;
