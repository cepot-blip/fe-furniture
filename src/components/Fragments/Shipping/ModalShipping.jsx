/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Car } from 'lucide-react';

import useAddressById from '../../../hooks/address/useAddressById';
import useCreateShipping from '../../../hooks/shipping/useCreateShipping';
import Button from '../../Elements/Button/Button';
import Card from '../Card/Card';

function ModalShipping() {
  const id = useParams();
  const user = JSON.parse(localStorage.getItem('data'));
  const addressStorage = JSON.parse(localStorage.getItem('address'));
  const navigate = useNavigate();

  const addressData = useSelector((state) => state.address.address);
  const { addressId } = useAddressById(id);
  const { createShippingMutation } = useCreateShipping();

  const [shippingCostValue, setShippingCostValue] = useState(0);

  // async function handleCreateShipping() {
  //   navigate('/payment');

  //   try {
  //     await createShippingMutation();

  //     // belum kelar
  //     const shippingPayload = {};
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const handleNavigate = () => {
    navigate('/payment');
  };

  function shippingCost(country) {
    const costs = {
      ID: 90000,
      US: 200000,
      IN: 122222,
      default: 150000,
    };
    return costs[country] || costs.default;
  }

  useEffect(() => {
    const country = addressStorage?.[0]?.country || 'default'; // berdasarkan country biaya cost
    const cost = shippingCost(country);
    setShippingCostValue(cost);
  }, [addressStorage]);

  console.log('user data for shipping', user);
  console.log('address storage', addressStorage);
  console.log('address redux', addressData);
  console.log('addressId:', addressId);

  return (
    <div>
      <Card className="flex flex-col gap-6 rounded-xl w-full max-w-3xl">
        <Card.Header>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
            <div className="flex items-center gap-3">
              <div className="border border-blue-100 h-12 w-12 flex items-center justify-center rounded-full">
                <Car size={28} className="text-blue-600" />
              </div>

              <div>
                <p className="text-xs text-gray-500">Shipping ID</p>
                <h2 className="font-medium">#FUFUFAFA2045</h2>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-xs text-gray-500">Status</p>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
                Pending
              </span>
            </div>
          </div>
        </Card.Header>
        {addressStorage.map((e) => (
          <div key={e.id} className="p-4 flex flex-col gap-10">
            <Card.Body className="grid grid-cols-2 gap-10">
              <div>
                <p className="text-xs text-gray-500">Street:</p>
                <h3 className="text-gray-800 font-medium">{e.street}</h3>
              </div>
              <div>
                <p className="text-xs text-gray-500">City:</p>
                <h3 className="text-gray-800 font-medium">{e.city}</h3>
              </div>
            </Card.Body>

            <Card.Body className="grid grid-cols-2 gap-10">
              <div>
                <p className="text-xs text-gray-500">Country:</p>
                <h3 className="text-gray-800 font-medium">{e.country}</h3>
              </div>

              <div className="flex flex-col">
                <p className="text-xs text-gray-500">Shipping Cost:</p>
                <h3 className="text-gray-800 font-medium">
                  {shippingCostValue.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </h3>
              </div>
              <div>
                <p className="text-xs text-gray-500">Postal Code:</p>
                <h3 className="text-gray-800 font-medium">{e.postal_code}</h3>
              </div>

              <div>
                <p className="text-xs text-gray-500">Shipping Date:</p>
                <h3 className="text-gray-800 font-medium">
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

            <Card.Body className="grid grid-cols-1">
              <div>
                <p className="text-xs text-gray-500">State:</p>
                <h3 className="text-gray-800 font-medium">{e.state}</h3>
              </div>
            </Card.Body>
          </div>
        ))}

        <Card.Footer className="bg-gray-50 p-4 rounded-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`https://api.multiavatar.com/${user?.id}.svg`}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <p className="text-xs text-gray-500">{user?.role}</p>
              <h3>{user?.email}</h3>
            </div>
          </div>

          <div>
            <Button
              className="text-white w-full bg-gray-800 hover:bg-gray-900 font-medium rounded-lg px-3 py-4 hover:shadow-lg cursor-pointer transition-all text-xs"
              onClick={handleNavigate}
            >
              Continue to Payment
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ModalShipping;
