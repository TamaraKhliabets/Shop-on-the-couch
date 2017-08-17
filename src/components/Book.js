import React, { Component } from 'react';

export default class Book extends Component {
  render() {
    return <div>{this.props.params.bookName}</div>
  }
}
