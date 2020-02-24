import React, { useState } from "react";

let submissionTimeout = 0;

export default function SearchForm({ searchTerm, setSearchTerm, setPageNumber }) {

  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  
  function submitSearch() {
    setSearchTerm(localSearchTerm || "");
    setPageNumber(1);
    console.log("Search submitted!", localSearchTerm);
  }

  return (
    <section className="search-form">
      {"Search: "}
      <input
        placeholder="Start typing a name"
        value={localSearchTerm}
        onChange={e => {
          window.clearTimeout(submissionTimeout);
          submissionTimeout = window.setTimeout(submitSearch, 500);
          setLocalSearchTerm(e.target.value);
          console.log("Search reset", e.target.value);
        }} />
    </section>
  );
}
