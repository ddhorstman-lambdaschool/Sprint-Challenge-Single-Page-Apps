import React, { useState } from "react";

let submissionTimeout = 0;

export default function SearchForm({ searchTerm, setSearchTerm }) {

  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  
  function submitSearch() {
    setSearchTerm(localSearchTerm);
    //console.log("Search submitted!", localSearchTerm);
  }

  return (
    <section className="search-form">
      <input
        placeholder="Search by name"
        value={localSearchTerm}
        onChange={e => {
          setLocalSearchTerm(e.target.value);
          //console.log("Search reset", localSearchTerm);
          window.clearTimeout(submissionTimeout);
          submissionTimeout = window.setTimeout(submitSearch, 500);
        }} />
    </section>
  );
}
