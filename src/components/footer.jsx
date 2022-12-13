import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

class Footer extends Component {
  style = {
    fontFamily: "Arial, Helvetica, sans-serif",
    position: "fixed",
    width: "70vw",
    top: "93vh",
    left: "23vw",
    height: "72vh",
    display: "flex",
    justifyContent: "center",
  };

  render() {
    const { pagevide, filteredList, activeChange } = this.props;
    let items = [];
    for (let number = 1; number <= Math.ceil(filteredList.length / pagevide); number++) {
      items.push(
        <Pagination.Item key={number} onClick={() => activeChange(number)}>
          {number}
        </Pagination.Item>
      );
    }
    return <Pagination style={this.style}> {items}</Pagination>;
  }
}

export default Footer;
