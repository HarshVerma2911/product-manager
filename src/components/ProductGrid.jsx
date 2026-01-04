export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(p => (
        <div
          key={p.id}
          className="bg-white rounded-2xl border border-slate-200
                     shadow-sm hover:shadow-lg transition overflow-hidden"
        >
          {/* Image */}
          <div className="h-48 bg-slate-100">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-2">
            <h3 className="text-lg font-semibold tracking-tight">
              {p.name}
            </h3>

            <p className="text-blue-600 font-semibold text-sm">
              ₹{p.price}
            </p>

            <p className="text-xs text-slate-500">
              {p.category}
            </p>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-600">
                Stock: {p.stock}
              </span>

              <span className="text-xs px-2 py-1 rounded-full
                               bg-green-100 text-green-700 font-medium">
                In Stock
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
