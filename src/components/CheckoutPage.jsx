import React, { useState, useRef, useEffect } from "react";

// Checkout Form Component
function CheckoutForm() {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <div className="border-b border-gray-200 mb-6 pb-3">
        <button className="py-2 px-6 text-sm font-medium border-b-2 border-blue-600 text-blue-600">
          Pay by Card
        </button>
      </div>

      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email address
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card number
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="1234 1234 1234 1234"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiration date
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Security code
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cardholder name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Jenny Rosen"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tax number (optional)
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="123456789"
            value={taxNumber}
            onChange={(e) => setTaxNumber(e.target.value)}
          />
        </div>

        {/* Price Summary */}
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Subtotal</span>
          <strong className="text-gray-900">₨609.98</strong>
        </div>

        <div className="flex justify-between mb-2 text-green-600">
          <span>Discount (5%)</span>
          <strong>- ₨30.50</strong>
        </div>

        <div className="flex justify-between mb-2 text-red-600">
          <span>COD Charges</span>
          <strong>+ ₨250.00</strong>
        </div>

        <div className="flex justify-between mb-6 font-bold text-lg">
          <span className="text-gray-900">Total</span>
          <span className="text-blue-600">₨829.48</span>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors">
          Pay ₨829.48
        </button>
      </div>

      <div className="text-center mt-6 text-gray-500 text-xs">
        Powered by Supplier · Terms · Privacy
      </div>
    </div>
  );
}

// COD Form Component
function CODForm() {
  const subtotal = 41526;
  const shipping = 3277.512;
  const codCharges = 250;
  const total = subtotal + shipping + codCharges;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("COD Order Placed! ✅");
  };

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <h3 className="text-xl font-bold mb-6 text-center">Cash on Delivery</h3>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal</span>
          <strong className="text-gray-900">{subtotal.toLocaleString()} PKR</strong>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Shipping</span>
          <strong className="text-gray-900">{shipping.toLocaleString()} PKR</strong>
        </div>
        <div className="flex justify-between text-red-600">
          <span>COD Charges</span>
          <strong>+{codCharges} PKR</strong>
        </div>
        <hr className="border-gray-300 my-3" />
        <div className="flex justify-between font-bold text-lg">
          <span className="text-gray-900">Total</span>
          <span className="text-blue-600">{total.toLocaleString()} PKR</span>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
      >
        Place Order (COD)
      </button>
    </div>
  );
}

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [country, setCountry] = useState({ value: "PAK", label: "Pakistan" });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [streetname, setStreetname] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const formRef = useRef(null);

  const countryOptions = [{ value: "PAK", label: "Pakistan" }];

  const subtotal = 41526;
  const shipping = 3277.512;

  let total = subtotal + shipping;

  if (paymentMethod === "e-Transfer") {
    total = total * 0.95;
  } else if (paymentMethod === "COD") {
    total = total + 250;
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setPaymentMethod("");
      }
    }

    if (paymentMethod) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [paymentMethod]);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
              {/* Left Side (Form) */}
              <div className="w-full md:w-7/12 p-6 md:p-8 bg-white order-2 md:order-1">
                <div className="flex items-center mb-6">
                  <div className="flex items-center mt-4">
                    <span className="w-5 h-5 rounded-full border-4 border-blue-600 inline-block mr-2"></span>
                    <h5 className="m-0 font-bold text-lg">Coht</h5>
                  </div>
                </div>

                <label className="block text-sm font-medium text-gray-600 mt-6 mb-3">
                  Customer Information
                </label>

                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <div className="border-b border-gray-200 px-4 py-3">
                    <input
                      type="text"
                      className="w-full border-0 outline-none text-sm"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="border-b border-gray-200 px-4 py-3 flex items-center">
                    <select className="border-0 outline-none bg-transparent text-sm mr-2 w-28">
                      <option value="+92">+92</option>
                    </select>
                    <input
                      type="text"
                      className="flex-1 border-0 outline-none text-sm"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="border-b border-gray-200 px-4 py-3">
                    <input
                      className="w-full border-0 outline-none text-sm"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="border-b border-gray-200 px-4 py-3">
                    <input
                      className="w-full border-0 outline-none text-sm"
                      type="text"
                      placeholder="Enter your city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="border-b border-gray-200 px-4 py-3">
                    <input
                      className="w-full border-0 outline-none text-sm"
                      type="text"
                      placeholder="Enter your street name or number"
                      value={streetname}
                      onChange={(e) => setStreetname(e.target.value)}
                    />
                  </div>
                  <div className="border-b border-gray-200 px-4 py-3">
                    <input
                      className="w-full border-0 outline-none text-sm"
                      type="text"
                      placeholder="Enter your postal code"
                      value={postalcode}
                      onChange={(e) => setPostalcode(e.target.value)}
                    />
                  </div>

                  <div className="px-4 py-3">
                    <select
                      className="w-full border-0 outline-none text-sm bg-transparent"
                      value={country.value}
                      onChange={(e) => {
                        const selected = countryOptions.find(
                          (c) => c.value === e.target.value
                        );
                        setCountry(selected);
                      }}
                    >
                      {countryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Payment Methods */}
                <label className="block text-sm font-medium text-gray-600 mt-6 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className={`h-16 text-base font-medium rounded-lg border-2 flex items-center justify-center transition-all ${paymentMethod === "e-Transfer"
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-100 bg-white text-gray-600"
                      }`}
                    onClick={() => setPaymentMethod("e-Transfer")}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    Bank Transfer
                  </button>
                  <button
                    className={`h-16 text-base font-medium rounded-lg border-2 flex items-center justify-center transition-all ${paymentMethod === "COD"
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-100 bg-white text-gray-600"
                      }`}
                    onClick={() => setPaymentMethod("COD")}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Cash on Delivery
                  </button>
                </div>

                {/* Place Order Button */}
                <button
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  onClick={() => setPaymentMethod("")}
                >
                  Make Payments →
                </button>

                {/* Inline Form */}
                {paymentMethod && (
                  <div ref={formRef} className="mt-6">
                    {paymentMethod === "e-Transfer" && <CheckoutForm />}
                    {paymentMethod === "COD" && <CODForm />}
                  </div>
                )}
              </div>

              {/* Right Side (Summary) */}
              <div className="w-full md:w-5/12 p-6 md:p-8 order-1 md:order-2 bg-gray-50">
                <div className="bg-blue-50 border border-blue-50 rounded-xl p-6 h-full">
                  <div className="text-center mt-8">
                    <p className="text-gray-500 text-xs mb-1">Total amount</p>
                    <h2 className="font-bold mb-2">
                      <span className="text-4xl text-blue-600">
                        {total.toLocaleString()}
                      </span>
                      <span className="text-4xl text-blue-300">.00 PKR</span>
                    </h2>
                    <p className="text-xs mb-4">
                      <span className="text-green-600 mr-1 text-xs">🔒</span>
                      <span className="text-gray-800 text-xs">
                        Secure Payment
                      </span>
                    </p>
                  </div>

                  <hr className="border-gray-200 my-4" />

                  <p className="text-gray-500 text-xs mb-4 mt-8">
                    Order Summary
                  </p>
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-bold mb-0 text-xs">
                      Nike Dunk High Retro
                    </p>
                    <p className="font-bold mb-0 text-xs">
                      {subtotal.toLocaleString()} PKR
                    </p>
                  </div>
                  <p className="text-gray-500 text-xs mb-4">Size Pak 7</p>

                  <hr className="border-gray-200 my-4" />

                  <div className="flex justify-between mb-2">
                    <p className="text-gray-500 mb-0 text-xs">Subtotal</p>
                    <p className="font-bold mb-0 text-xs">
                      {subtotal.toLocaleString()} PKR
                    </p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-500 mb-0 text-xs">Shipping</p>
                    <p className="font-bold mb-0 text-xs">
                      {shipping.toLocaleString()} PKR
                    </p>
                  </div>

                  {paymentMethod === "COD" && (
                    <div className="flex justify-between mb-2">
                      <p className="text-gray-500 mb-0 text-xs">COD Charges</p>
                      <p className="font-bold mb-0 text-xs">250 PKR</p>
                    </div>
                  )}

                  {paymentMethod === "e-Transfer" && (
                    <div className="flex justify-between mb-2 text-green-600">
                      <p className="mb-0 text-xs">5% Bank Discount</p>
                      <p className="font-bold mb-0 text-xs">-5%</p>
                    </div>
                  )}

                  <hr className="border-gray-200 my-4" />

                  <div className="flex justify-between font-bold">
                    <span className="text-sm">Total</span>
                    <span className="text-sm text-blue-600">
                      {total.toLocaleString()} PKR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}