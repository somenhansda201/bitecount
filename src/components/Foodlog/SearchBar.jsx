import { Search } from "lucide-react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="food-search-box">

      <Search size={20} />

      <input
        type="text"
        placeholder="Search foods..."
      />

    </div>
  );
}