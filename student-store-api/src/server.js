const express = require('express');
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

const orderRoutes = require("./routes/orderRoute");
const productRoutes = require("./routes/productRoute");
const orderItemRoutes = require("./routes/orderItemRoute");


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.get('/', (req, res) => {
    res.send('aloha world :D')
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/order_items", orderItemRoutes);