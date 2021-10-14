import React from "react";

export const SearchBar = () => {
  return (
    <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};
