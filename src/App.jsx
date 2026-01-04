import { useState } from "react";
import initialProducts from "./data/initialProducts";
import ProductTable from "./components/ProductTable";
import ProductGrid from "./components/ProductGrid";
import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";

const ITEMS_PER_PAGE = 5;

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Product Management</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <SearchBar onSearch={setSearch} />

        <button
          onClick={() => setView((v) => (v === "table" ? "grid" : "table"))}
          className="inline-flex items-center gap-2 px-5 py-2.5
             bg-slate-900 text-white text-sm font-medium
             rounded-xl shadow hover:bg-slate-800 transition"
        >
          {view === "table" ? "Switch to Grid View" : "Switch to List View"}
        </button>
      </div>

      <ProductForm setProducts={setProducts} />

      {view === "table" ? (
        <ProductTable products={paginated} />
      ) : (
        <ProductGrid products={paginated} />
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        setCurrentPage={setPage}
      />
    </div>
  );
}
