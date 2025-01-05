/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Calendar,
  CircleDollarSign,
  CreditCard,
  Landmark,
  MapPinHouse,
  TrendingUp,
  User,
} from 'lucide-react';

import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

import PaymentMethod, {
  BankTransfer,
  CreditCards,
  EWallet,
} from './PaymentMethod';

function PaymentInfo() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const user = JSON.parse(localStorage.getItem('data'));
  const order = JSON.parse(localStorage.getItem('order'));
  const address = JSON.parse(localStorage.getItem('address'));

  const addressMap = address && address.length > 0 ? address[0] : null;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden pb-2">
        {/* user information */}
        <div className="p-6">
          <div className="border-b-2 mb-5">
            <h1 className="text-xl font-semibold text-gray-800 mb-6">
              User Information
            </h1>
          </div>
          <Card className="space-y-6">
            <Card.Header className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-2 rounded-full">
                  <User size={24} className="text-gray-600" />
                </div>
                <p className="text-lg text-gray-600">User Email</p>
              </div>
              <div className="flex flex-col items-end">
                <h3 className="text-lg font-medium text-gray-800">
                  {user?.email}
                </h3>
              </div>
            </Card.Header>
            <Card.Footer className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-2 rounded-full">
                  <MapPinHouse size={24} className="text-gray-600" />
                </div>
                <p className="text-lg text-gray-600">Country</p>
              </div>
              <div className="flex flex-col items-end">
                <h3 className="text-lg font-medium text-gray-800">
                  {addressMap ? addressMap.country : 'Not Available'}
                </h3>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </div>

      {/* payment information */}
      <div className="border border-gray-200 rounded-lg overflow-hidden pt-2">
        <div className="p-6">
          <div className="border-b-2 mb-5">
            <h1 className="text-xl font-semibold text-gray-800 mb-6">
              Payment Details
            </h1>
          </div>
          <Card className="space-y-6">
            <Card.Header className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* bank tf */}
              <PaymentMethod
                onClick={() => setSelectedMethod('BankTransfer')}
                className={`flex items-center p-4 border border-gray-200 rounded-lg justify-center gap-3 cursor-pointer ${
                  selectedMethod === 'BankTransfer' ? 'bg-gray-100' : ''
                }`}
                // conditional rendering
              >
                <Landmark />
                <h3 className="text-lg font-medium">Bank Transfer</h3>
              </PaymentMethod>

              {/* Credit Card */}
              <PaymentMethod
                onClick={() => setSelectedMethod('CreditCards')}
                className={`flex items-center p-4 border border-gray-200 rounded-lg justify-center gap-3 cursor-pointer ${
                  selectedMethod === 'CreditCards' ? 'bg-gray-100' : ''
                }`}
              >
                <CreditCard />
                <h3 className="text-lg font-medium">Credit Card</h3>
              </PaymentMethod>

              {/* E Wallet */}
              <PaymentMethod
                onClick={() => setSelectedMethod('EWallet')}
                className={`flex items-center p-4 border border-gray-200 rounded-lg justify-center gap-3 cursor-pointer ${
                  selectedMethod === 'EWallet' ? 'bg-gray-100' : ''
                }`}
              >
                <Landmark />
                <h3 className="text-lg font-medium">E Wallet</h3>
              </PaymentMethod>
            </Card.Header>

            <Card.Body>
              {/* Conditional Rendering */}
              {selectedMethod && (
                <div className="relative">
                  {selectedMethod === 'BankTransfer' && <BankTransfer />}
                  {selectedMethod === 'CreditCards' && <CreditCards />}
                  {selectedMethod === 'EWallet' && <EWallet />}
                </div>
              )}
            </Card.Body>

            <Card.Body className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Calendar size={24} className="text-gray-600" />
                </div>
                <p className="text-lg text-gray-600">Date</p>
              </div>
              <div className="flex flex-col items-end">
                <h3 className="text-lg font-medium text-gray-800">
                  {new Date().toLocaleString('ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </h3>
              </div>
            </Card.Body>

            <Card.Footer>
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <TrendingUp size={24} className="text-gray-600" />
                  </div>
                  <p className="text-lg text-gray-600">Status</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </div>
            </Card.Footer>

            <Card.Footer>
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <CircleDollarSign size={24} className="text-gray-600" />
                  </div>
                  <p className="text-lg text-gray-600">Amount</p>
                </div>
                <h3 className="text-lg font-medium text-gray-800">Rp.000</h3>
              </div>
            </Card.Footer>

            <div className="flex justify-center gap-8">
              <Button className="text-gray-800 w-full bg-white border border-gray-800 font-medium rounded-lg px-3 py-4  cursor-pointer transition-all text-lg">
                Continue Shopping
              </Button>

              <Button className="text-white w-full bg-gray-800 hover:bg-gray-900 font-medium rounded-lg px-3 py-4 hover:shadow-lg cursor-pointer transition-all text-lg">
                Payment Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
