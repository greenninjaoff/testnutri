import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-[rgb(var(--border))] bg-[rgb(var(--card))] px-2 py-1 shadow-md">
      <Search className="w-4 h-4 text-[rgb(var(--muted))]" />
      <input
        id="search"
        placeholder="Search..."
        className="text-sm outline-0 bg-transparent text-[rgb(var(--text))] placeholder:text-[rgb(var(--muted))]"
      />
    </div>
  )
}

export default SearchBar