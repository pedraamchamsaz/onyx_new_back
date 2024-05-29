const express = require("express");
const router = express.Router();
const {
  getEvents,
  getSingleEvent,
  createEvent,
} = require("../controllers/eventController");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.get("/", getEvents);
router.get("/:id", getSingleEvent);
router.post("/", createEvent);

router.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body; // Access the array from the request body

  const line_items = products.map((product) => ({
    price_data: {
      currency: "GBP",
      product_data: {
        name: product.name,
        // images: product.image, // Optional
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: line_items,
    mode: "payment",
    success_url: "http://www.google.com",
    cancel_url: "http://www.facebook.com",
  });

  res.json({ id: session.id });
});

module.exports = router;
