import { Search } from "lucide-react";
import "./SearchBar.css";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="food-search-box">
      <Search size={20} />

      <input
        type="text"
        placeholder="Search foods..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}