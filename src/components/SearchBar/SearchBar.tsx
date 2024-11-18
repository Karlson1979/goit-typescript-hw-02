import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import css from "../SearchBar/Search.module.css";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.headerSearch}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      <Toaster />
    </header>
  );
};

export default SearchBar;
