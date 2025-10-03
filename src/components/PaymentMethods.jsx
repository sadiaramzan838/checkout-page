import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FaUniversity, FaCreditCard } from "react-icons/fa";

export default function PaymentMethods({ paymentMethod, setPaymentMethod }) {
  return (
    <div>
      <label className="form-label mt-4">Payment method</label>
      <Row className="mb-3">
        <Col>
          <Button
            variant="light"
            className={`method-btn w-100 ${paymentMethod === "e-Transfer" ? "active" : ""}`}
            onClick={() =>
              setPaymentMethod(paymentMethod === "e-Transfer" ? "" : "e-Transfer")
            }
          >
            <FaUniversity className="me-2" /> Bank Transfer
          </Button>
        </Col>

        <Col>
          <Button
            variant="light"
            className={`method-btn w-100 ${paymentMethod === "COD" ? "active" : ""}`}
            onClick={() =>
              setPaymentMethod(paymentMethod === "COD" ? "" : "COD")
            }
          >
            <FaCreditCard className="me-2" /> Cash on Delivery
          </Button>
        </Col>
      </Row>
    </div>
  );
}
