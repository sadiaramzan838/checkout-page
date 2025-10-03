import React, { useState } from "react";
import { Form, Button, Row, Col, Card, Nav } from "react-bootstrap";

export default function CheckoutForm() {
  const [method, setMethod] = useState("card");

  const subtotal = 609.98;
  const discount = (subtotal * 5) / 100;
  const codCharges = 250;

  // Total calculation (subtotal - discount + COD charges)
  const total = subtotal - discount + codCharges;

  return (
    <div className="d-flex justify-content-center align-items-center bg-light py-5">
      <Card className="shadow-lg" style={{ width: "500px" }}>
        <Card.Body>
          {/* Tabs */}
          <Nav variant="tabs" activeKey={method} className="mb-3">
            <Nav.Item>
              <Nav.Link eventKey="card" onClick={() => setMethod("card")}>
                Pay by Card
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Checkout Form */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Card number</Form.Label>
              <Form.Control type="text" placeholder="1234 1234 1234 1234" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Expiration date</Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Security code</Form.Label>
                  <Form.Control type="text" placeholder="123" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Cardholder name</Form.Label>
              <Form.Control type="text" placeholder="Jenny Rosen" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select>
                <option>Pakistan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Street Address</Form.Label>
              <Form.Control type="text" placeholder="123 Main St" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter city name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="text" placeholder="90001" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Tax number (optional)</Form.Label>
              <Form.Control type="text" placeholder="123456789" />
            </Form.Group>

            {/* Price Summary */}
            <div className="d-flex justify-content-between mb-1">
              <span>Subtotal</span>
              <strong>₨{subtotal.toFixed(2)}</strong>
            </div>

            {discount > 0 && (
              <div className="d-flex justify-content-between mb-1 text-success">
                <span>Discount (5%)</span>
                <strong>- ₨{discount.toFixed(2)}</strong>
              </div>
            )}

            {/* COD Charges Row (always shown after discount) */}
            <div className="d-flex justify-content-between mb-1 text-danger">
              <span>COD Charges</span>
              <strong>+ ₨{codCharges.toFixed(2)}</strong>
            </div>

            <div className="d-flex justify-content-between mb-3 fw-bold">
              <span>Total</span>
              <span style={{ color: "#3353ea" }}>₨{total.toFixed(2)}</span>
            </div>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              style={{ backgroundColor: "#3353ea" }}
            >
              Pay ₨{total.toFixed(2)}
            </Button>
          </Form>

          {/* Footer */}
          <div
            className="text-center mt-3 text-muted"
            style={{ fontSize: "12px" }}
          >
            Powered by Supplier · Terms · Privacy
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
