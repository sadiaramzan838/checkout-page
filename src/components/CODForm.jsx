import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function CODForm({ setPaymentMethod }) {
  const subtotal = 41526;
  const shipping = 3277.512;
  const codCharges = 250;
  const total = subtotal + shipping + codCharges;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("COD Order Placed! ✅");

    setPaymentMethod("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <Card className="shadow-lg p-4" style={{ width: "500px" }}>
        <h3 className="mb-4 text-center">Cash on Delivery</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address (optional)</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>{subtotal.toLocaleString()} PKR</strong>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <strong>{shipping.toLocaleString()} PKR</strong>
            </div>
            <div className="d-flex justify-content-between text-danger">
              <span>COD Charges</span>
              <strong>+{codCharges} PKR</strong>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span style={{ color: "#3353ea" }}>
                {total.toLocaleString()} PKR
              </span>
            </div>
          </div>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Place Order (COD)
          </Button>
        </Form>
      </Card>
    </div>
  );
}
