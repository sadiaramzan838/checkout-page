import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-country-flag";
import "./CheckoutPage.css";
import PaymentMethods from "./PaymentMethods";
import CheckoutForm from "./CheckoutForm";
import CODForm from "./CODForm";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [country, setCountry] = useState({ value: "PAK", label: "Pakistan" });
  const formRef = useRef(null);

  const countryOptions = countryList().getData();

  const customOption = (props) => (
    <div {...props.innerProps} className="d-flex align-items-center p-2">
      <ReactCountryFlag
        countryCode={props.data.value}
        svg
        style={{ marginRight: "8px" }}
      />
      {props.data.label}
    </div>
  );

  const customSingleValue = (props) => (
    <div className="d-flex align-items-center">
      <ReactCountryFlag
        countryCode={props.data.value}
        svg
        style={{ marginRight: "8px" }}
      />
      {props.data.label}
    </div>
  );

  // 💰 Price Calculation
  const subtotal = 41526;
  const shipping = 3277.512;

  let total = subtotal + shipping;

  if (paymentMethod === "e-Transfer") {
    total = total * 0.95;
  } else if (paymentMethod === "COD") {
    total = total + 250;
  }

  // ✅ Close form on outside click
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
    <div className="checkout-wrapper py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Row className="checkout-card g-0 shadow rounded-4 overflow-hidden">
              {/* Left Side (Form) */}
              <Col
                md={7}
                className="left-pane p-4 bg-white order-2 order-md-1"
              >
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center mt-4">
                    <span
                      className="rounded-circle border border-5 border-primary d-inline-block me-2"
                      style={{ width: "20px", height: "20px" }}
                    ></span>
                    <h5 className="m-0 fw-bold">Coht</h5>
                  </div>
                </div>

                <label className="form-label mt-4">Customer Information</label>

                <div className="info-box mt-3">
                  <div className="info-row">
                    <input
                      type="text"
                      className="form-control border-0 shadow-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="info-row d-flex">
                    <div className="flex-fill me-2 d-flex">
                      <Select
                        className="me-2"
                        classNamePrefix="select"
                        options={[{ value: "+92", label: "+92" }]}
                        defaultValue={{ value: "+92", label: "+92" }}
                        isSearchable={false}
                        styles={{
                          container: (base) => ({ ...base, width: "110px" }),
                        }}
                      />
                      <input
                        type="text"
                        className="form-control border-0 shadow-none"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div className="info-row">
                    <input
                      className="form-control border-0 shadow-none"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="info-row w-100">
                    <Select
                      className="w-100"
                      classNamePrefix="select"
                      options={countryOptions}
                      value={country}
                      onChange={setCountry}
                      components={{
                        Option: customOption,
                        SingleValue: customSingleValue,
                      }}
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <PaymentMethods
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                />

                {/* Place Order Button */}
                <Button
                  className="pay-btn w-100 mt-3"
                  onClick={() => setPaymentMethod("")}
                >
                  Make Payments →
                </Button>

                {/* Inline Form */}
                {paymentMethod && (
                  <div ref={formRef} className="mt-4">
                    {paymentMethod === "e-Transfer" && <CheckoutForm />}
                    {paymentMethod === "COD" && <CODForm />}
                  </div>
                )}
              </Col>

              {/* Right Side (Summary) */}
              <Col md={5} className="p-4 order-1 order-md-2">
                <div className="summary-card">
                  <div className="text-center mt-5">
                    <p className="text-muted small mb-1">Total amount</p>
                    <h2 className="fw-bold mb-2">
                      <span style={{ fontSize: "2.2rem", color: "#3353ea" }}>
                        {total.toLocaleString()}
                      </span>
                      <span style={{ fontSize: "2.2rem", color: "#9eaefdff" }}>
                        .00 PKR
                      </span>
                    </h2>
                    <p className="small mb-3">
                      <span
                        className="text-success me-1"
                        style={{ fontSize: "0.6rem" }}
                      >
                        🔒
                      </span>
                      <span
                        className="text-dark"
                        style={{ fontSize: "0.6rem" }}
                      >
                        Secure Payment
                      </span>
                    </p>
                  </div>

                  <hr />
                  <p
                    className="text-muted small mb-3 mt-5"
                    style={{ fontSize: "12px" }}
                  >
                    Order Summary
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <p className="fw-bold mb-0" style={{ fontSize: "12px" }}>
                      Nike Dunk High Retro
                    </p>
                    <p className="fw-bold mb-0" style={{ fontSize: "12px" }}>
                      {subtotal.toLocaleString()} PKR
                    </p>
                  </div>
                  <p
                    className="text-muted small mb-3"
                    style={{ fontSize: "12px" }}
                  >
                    Size Pak 7
                  </p>

                  <hr />
                  <div className="d-flex justify-content-between mb-1">
                    <p
                      className="text-muted mb-0 mt-0"
                      style={{ fontSize: "12px" }}
                    >
                      Subtotal
                    </p>
                    <p
                      className="fw-bold mb-0 mt-0"
                      style={{ fontSize: "12px" }}
                    >
                      {subtotal.toLocaleString()} PKR
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <p
                      className="text-muted mb-0 mt-0"
                      style={{ fontSize: "12px" }}
                    >
                      Shipping
                    </p>
                    <p
                      className="fw-bold mb-0 mt-0"
                      style={{ fontSize: "12px" }}
                    >
                      {shipping.toLocaleString()} PKR
                    </p>
                  </div>

                  {paymentMethod === "COD" && (
                    <div className="d-flex justify-content-between mb-1">
                      <p
                        className="text-muted mb-0 mt-0"
                        style={{ fontSize: "12px" }}
                      >
                        COD Charges
                      </p>
                      <p
                        className="fw-bold mb-0 mt-0"
                        style={{ fontSize: "12px" }}
                      >
                        250 PKR
                      </p>
                    </div>
                  )}

                  {paymentMethod === "e-Transfer" && (
                    <div className="d-flex justify-content-between mb-1 text-success">
                      <p className="mb-0 mt-0" style={{ fontSize: "12px" }}>
                        5% Bank Discount
                      </p>
                      <p
                        className="fw-bold mb-0 mt-0"
                        style={{ fontSize: "12px" }}
                      >
                        -5%
                      </p>
                    </div>
                  )}

                  <hr />
                  <div className="d-flex justify-content-between fw-bold total-row">
                    <span style={{ fontSize: "13px" }}>Total</span>
                    <span
                      className="total-amount"
                      style={{ fontSize: "13px", color: "#3353ea" }}
                    >
                      {total.toLocaleString()} PKR
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
