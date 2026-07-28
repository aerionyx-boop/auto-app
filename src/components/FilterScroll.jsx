export default function FilterScroll({ children }) {
  return (
    <div className="-mx-4 sm:mx-0">
      <div className="flex gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </div>
  )
}
