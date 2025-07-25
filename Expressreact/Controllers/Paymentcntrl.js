const Payment = require('../Models/Paymentmodel');

// Store payment info
exports.storePayment = async (req, res) => {
  try {
    const { name, cardnumber, expiry, cvv, email } = req.body;

    // Optionally: Validate data here

    const payment = new Payment({
      name,
      cardnumber,
      expiry,
      cvv,
      email
    });

    await payment.save();

    res.status(201).json({ message: "Payment stored successfully", payment });
  } catch (error) {
    res.status(500).json({ message: "Failed to store payment", error: error.message });
  }
};

// Optional: Get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching payments", error: error.message });
  }
};
