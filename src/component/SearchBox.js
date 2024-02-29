import React, { Component } from "react";
import "./SearchBox.css";
class SearchBox extends Component {
  render() {
    return (
      <>
        <input
          type="search"
          placeholder="Search Robots"
          className="searchStyle"
          onChange={this.props.onChangeHandler}
        />
      </>
    );
  }
}
export default SearchBox;
