import { useState } from "react";

export default function ProductForm({ setProducts }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.price) err.price = "Price is required";
    if (!form.category) err.category = "Category is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = () => {
    if (!validate()) return;

    setProducts((prev) => [...prev, { ...form, id: Date.now() }]);
    setForm({ name: "", price: "", category: "", stock: "", description: "" });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-3">
      <h2 className="text-lg font-semibold mb-4">Add Product</h2>

      <input
        className="input"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        className="input"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

      <input
        className="input"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      {errors.category && (
        <p className="text-red-500 text-sm">{errors.category}</p>
      )}

      <input
        className="input"
        type="number"
        placeholder="Stock"
        value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
      />

      <textarea
        className="input"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button
        onClick={submit}
        className="mt-2 inline-flex items-center justify-center
             px-5 py-2.5 bg-blue-600 text-white text-sm
             font-medium rounded-lg shadow-sm
             hover:bg-blue-700 transition"
      >
        Add Product
      </button>
    </div>
  );
}
