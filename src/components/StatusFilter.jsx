import FilterScroll from './FilterScroll'

export default function StatusFilter({ statuses, activeStatus, onStatusChange }) {
  return (
    <FilterScroll>
      {statuses.map(({ id, label }) => {
        const isActive = activeStatus === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => onStatusChange(id)}
            className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all min-h-11 ${
              isActive
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-slate-900 active:bg-slate-100'
            }`}
          >
            {label}
          </button>
        )
      })}
    </FilterScroll>
  )
}
