import React, { Component } from 'react';
import Head from './head';

export default class Page extends Component {
  render() {
    return (
      <div className='container'>
        <Head title='Home'/>
        { this.props.children }
      </div>
    )
  }
}
