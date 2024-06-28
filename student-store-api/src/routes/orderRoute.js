const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");


router.get("/", orderController.getAllOrders);

router.get("/:order_id", orderController.getOrderById);

router.post("/", orderController.createOrder);

router.put("/:order_id", orderController.updateOrder);

router.delete("/:order_id", orderController.deleteOrder);

// route to add items to an order
router.post("/:order_id/items", orderController.addOrderItems);

router.get("/:order_id/total", orderController.calculateTotal);

module.exports = router;