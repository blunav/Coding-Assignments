const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Mock Inventory Logic
const inventory = { "item-1": 5 };

// API: Payment Endpoint (Fails if header is set)
app.post('/api/checkout', (req, res) => {
  const failPayment = req.headers['x-mock-failure'] === 'true';
  if (failPayment) {
    return res.status(400).json({ success: false, message: "Payment Processor Error" });
  }
  res.json({ success: true, orderId: "ORD-9921" });
});

app.listen(PORT, () => {
  console.log(`Sandbox running at http://localhost:${PORT}`);
});
