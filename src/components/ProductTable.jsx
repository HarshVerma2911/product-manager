export default function ProductTable({ products }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100 text-xs uppercase text-slate-600">
          <tr>
            <th className="px-4 py-3 text-left">Product</th>
            <th className="px-4 py-3 text-left">Price</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-left">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t hover:bg-slate-50 transition">
              <td className="px-4 py-3 font-medium">{p.name}</td>
              <td className="px-4 py-3">₹{p.price}</td>
              <td className="px-4 py-3">{p.category}</td>
              <td className="px-4 py-3">{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
