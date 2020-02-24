import React, { useState } from "react";

let submissionTimeout = 0;

export default function SearchForm({ searchTerm, setSearchTerm, setPageNumber }) {

  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  
  function submitSearch(value) {
    setSearchTerm(value);
    setPageNumber(1);
    //console.log("Search submitted!", value);
  }

  return (
    <section className="search-form">
      {"Search: "}
      <input
        placeholder="Start typing a name"
        value={localSearchTerm}
        onChange={e => {
          let term = e.target.value;
          setLocalSearchTerm(term);
          //console.log("Search reset", term);
          window.clearTimeout(submissionTimeout);
          submissionTimeout = window.setTimeout(() => submitSearch(term), 500);
        }} />
    </section>
  );
}
