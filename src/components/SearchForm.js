import React from "react";

export default function SearchForm({ searchTerm, setSearchTerm }) {

  return (
    <section className="search-form">
      <input
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)} />
    </section>
  );
}
