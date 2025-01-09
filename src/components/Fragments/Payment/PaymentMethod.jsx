/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';

import Card from '../Card/Card';

/* eslint-disable react/react-in-jsx-scope */
const bank = [
  {
    id: 1,
    name: 'FUFUFAFA Company',
    logo: 'https://w7.pngwing.com/pngs/561/1/png-transparent-bank-central-asia-logo-bca-finance-business-bank-blue-cdr-text.png',
    nrk: 123456789,
  },
  {
    id: 2,
    name: 'FUFUFAFA Company',
    logo: 'https://w7.pngwing.com/pngs/561/1/png-transparent-bank-central-asia-logo-bca-finance-business-bank-blue-cdr-text.png',
    nrk: 987654321,
  },
];

const cardCredit = [
  {
    id: 1,
    name: 'Visa Platinum',
    number: '4111 1111 1111 1111',
    expiry: '12/25',
    holder: 'FUFUFAFA Company',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
    background: 'bg-gradient-to-r from-blue-500 to-blue-300',
  },
  {
    id: 2,
    name: 'MasterCard Gold',
    number: '5555 5555 5555 4444',
    expiry: '09/26',
    holder: 'FUFUFAFA Company',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    background: 'bg-gradient-to-r from-yellow-500 to-yellow-300',
  },
];

const eWallets = [
  {
    id: 1,
    name: 'GoPay',
    accountNumber: '0812-3456-7890',
    company: 'FUFUFAFA Company',
    logo: 'https://static.vecteezy.com/system/resources/previews/028/766/371/non_2x/gopay-payment-icon-symbol-free-png.png',
    background: 'bg-gradient-to-r from-blue-500 to-blue-300',
  },
  {
    id: 2,
    name: 'OVO',
    accountNumber: '0812-9876-5432',
    company: 'FUFUFAFA Company',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlbLfNtav8cKPqxoNPiz1e31_mgsVAb0ze2daTvNWCDvToYVN6Oc0tdR8efBL1CwR7nak&usqp=CAU',
    background: 'bg-gradient-to-r from-purple-500 to-purple-300',
  },
];

export function BankTransfer() {
  const [selectedBankTransfer, setSelectedBankTransfer] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {bank.map((e) => (
        <Card
          key={e.id}
          onClick={() => setSelectedBankTransfer(e.id)}
          className={`flex items-center gap-5 p-4 bg-white shadow-lg rounded-lg border border-gray-200 cursor-pointer ${selectedBankTransfer === e.id ? 'border-4 border-yellow-400' : ''}`}
        >
          <Card.Header>
            <img src={e.logo} className="w-24 h-16 object-contain" />
          </Card.Header>
          <div className="flex flex-col gap-2">
            <Card.Body>
              <h3 className="text-md font-semibold text-gray-800">{e.name}</h3>
            </Card.Body>
            <Card.Footer>
              <p className="text-sm text-gray-600 font-mono">{e.nrk}</p>
            </Card.Footer>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function CreditCards() {
  const [selectedCreditCards, setSelectedCreditCards] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cardCredit.map((card) => (
        <Card
          key={card.id}
          onClick={() => setSelectedCreditCards(card.id)}
          className={`p-6 rounded-lg shadow-lg text-white cursor-pointer ${selectedCreditCards === card.id ? 'border-4 border-yellow-400' : ''} ${card.background}`}
        >
          <Card.Header className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">{card.name}</h3>
            <img
              src={card.logo}
              alt={`${card.name} Logo`}
              className="w-12 h-12 object-contain"
            />
          </Card.Header>
          <Card.Body className="text-xl font-mono tracking-widest mb-4">
            {card.number}
          </Card.Body>
          <Card.Footer className="flex justify-between text-sm">
            <div>
              <p className="uppercase text-gray-200">Card Holder</p>
              <p>{card.holder}</p>
            </div>
            <div>
              <p className="uppercase text-gray-200">Expires</p>
              <p>{card.expiry}</p>
            </div>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export function EWallet() {
  const [selectedWallet, setSelectedWallet] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {eWallets.map((wallet) => (
        <Card
          key={wallet.id}
          onClick={() => setSelectedWallet(wallet.id)}
          className={`p-6 rounded-lg shadow-lg text-white cursor-pointer ${selectedWallet === wallet.id ? 'border-4 border-yellow-400' : ''} ${wallet.background}`}
        >
          <Card.Header className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">{wallet.name}</h3>
            <img
              src={wallet.logo}
              className="w-12 h-12 rounded-full object-scale-down"
            />
          </Card.Header>
          <Card.Body>
            <p className="uppercase text-gray-200 text-sm">Account Number</p>
            <p className="text-xl font-bold">{wallet.accountNumber}</p>
          </Card.Body>
          <Card.Footer className="mt-4">
            <p className="text-sm">{wallet.company}</p>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export function CashOnDelivery() {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Cash On Delivery (COD)
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-700">Payment Method</h3>
          <p className="text-gray-600">
            Please prepare the exact amount in cash to hand over to the courier
            upon delivery.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-700">
            Delivery Instructions
          </h3>
          <p className="text-gray-600">
            Ensure someone is available at the delivery address to receive the
            order and make the payment.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-700">
            Customer Support
          </h3>
          <p className="text-gray-600">
            If you have any questions or concerns, please reach out to our
            dedicated support team at **E-Furniture**:
          </p>
          <p className="text-gray-800 font-semibold">📞 +62 812-3456-7890</p>
          <p className="text-gray-800 font-semibold">
            ✉️ support@e-furniture.com
          </p>
          <p className="text-gray-600 mt-2">
            We are available Monday to Friday, 9:00 AM - 6:00 PM.
          </p>
        </div>
      </div>
    </div>
  );
}

function PaymentMethod({ className, children, onClick }) {
  return (
    <section className={className} onClick={onClick}>
      {children}
    </section>
  );
}

function Header({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Body({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Footer({ className, children }) {
  return <div className={className}>{children}</div>;
}

// composition patern
PaymentMethod.Header = Header;
PaymentMethod.Body = Body;
PaymentMethod.Footer = Footer;

export default PaymentMethod;
