import React from "react";
import {useEffect, useState, useContext} from "react";
import {SearchResultContext} from "../context/SearchResultContext";

const Search = () => {
  const {
    questions,
    answers,
    setQuestions,
    setAnswers,
    searchString,
    setSearchString,
  } = useContext(SearchResultContext);
  const handleChange = (event) => setSearchString(event.target.value);

  console.log({questions});
  console.log({answers});
  return (
    <input
      id="livesearch"
      type="text"
      placeholder="Search.."
      className="prompt"
      onChange={handleChange}
    />
  );
};

export default Search;
