const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { createClient } = require("@supabase/supabase-js");

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Test route
app.get("/health", (req, res) => {
  res.json({ ok: true });
});

//lấy tất cả product
app.get("/api/products", async (req, res) => {
  try {
    const { data: products, error } = await supabase.from("products").select("*");
    if (error) throw error;
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//lấy thông tin product theo ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data: product, error } = await supabase.from("products").select("*").eq("id", id).single();
    if (error) throw error;
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// create order
app.post("/api/orders", async (req, res) => {
  try {
    const { form, product } = req.body;

    // Lưu đơn hàng vào bảng orders
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert([{ ...form, product_id: product.id }])
      .single();

    if (orderError) throw orderError;

    // Lưu chi tiết đơn hàng vào bảng order_items
    const { error: itemsError } = await supabase.from("order_items").insert(
      product.productList.map((item) => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
      }))
    );

    if (itemsError) throw itemsError;

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Đăng ký user
// Đăng ký user (lưu vào bảng "user" tự tạo)
app.post("/api/register", async (req, res) => {
  try {
    const { email, password_hash, full_name, phone } = req.body;

    // Insert trực tiếp vào bảng "user"
    const { data, error } = await supabase
      .from("users")
      .insert([{ email, password_hash, full_name, phone }])
      .select();

    if (error) throw error;

    res.status(201).json({ user: data[0] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Đăng nhập user (so khớp email + password trong bảng "user")
app.post("/api/login", async (req, res) => {
  try {
    const { email, password_hash } = req.body;

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password_hash", password_hash) // ⚠️ Bảo mật: không nên lưu plain password
      .single();

    if (error || !data) throw new Error("Sai email hoặc mật khẩu");

    res.status(200).json({ user: data });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});



app.listen(PORT, () => {
  console.log(`Server đang chạy ở http://localhost:${PORT}`);
});


