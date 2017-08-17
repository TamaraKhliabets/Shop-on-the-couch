import React, { Component } from 'react';
import Fiction from './Fiction';
import { Link } from 'react-router-dom';

export default class List extends Component {
  render() {
    return (
      <div>
        <ul className='list'>
          <li><Link to='/fiction'>Художественная литература</Link></li>
            <div>{this.props.children}</div>
          <li><Link to='/non-fiction'>Нехудожественная литература</Link></li>
          <li><Link to='/forChildren'>Литература для детей и родителей</Link></li>
          <li><Link to='/education'>Учебная литература</Link></li>
          <li><Link to='/business'>Бизнес-литература</Link></li>
          <li><Link to='/foreign'>Литература на иностранных языках</Link></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
