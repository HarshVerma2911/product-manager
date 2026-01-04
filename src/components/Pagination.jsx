export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div className="flex justify-center items-center gap-3 mt-6">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
        className="px-3 py-1.5 text-sm border border-slate-300
             rounded-lg hover:bg-slate-100 disabled:opacity-50"
      >
        Prev
      </button>

      <span>
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
        className="px-3 py-1.5 text-sm border border-slate-300
             rounded-lg hover:bg-slate-100 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
