import React, { Component } from "react";
import "./App.css";
import Card from "../component/Card.js";
import SearchBox from "../component/SearchBox.js";
import Scroll from "../component/Scroll.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robots: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resonpse) => resonpse.json())
      .then((result) =>
        this.setState({
          robots: result,
        })
      );
  }
  onChangeHandler = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    let { robots, searchField } = this.state;
    let newRobots = robots.filter((value) => {
      return value.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return robots.length === 0 ? (
      <div className="headingStyle">LOADING</div>
    ) : (
      <>
        <div style={{ textAlign: "center" }}>
          <div className="headingStyle">ROBOFRIENDS</div>
          <SearchBox onChangeHandler={this.onChangeHandler} />
          <Scroll>
            <div className="flexBox">
              {newRobots.map((value) => (
                <Card name={value.name} email={value.email} id={value.id} />
              ))}
            </div>
          </Scroll>
        </div>
      </>
    );
  }
}
export default App;
