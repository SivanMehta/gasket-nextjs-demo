/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Head from '../components/head';
import fetch from '@gasket/fetch';

export default class IndexPage extends Component {
  static async getInitialProps() {
    const req = await fetch('http://localhost:8080/products');
    const data = await req.json();
    console.log(data);

    return {
      data
    }
  }

  render() {
    return (
      <>
        <Head title='Home'/>
        <pre>{ JSON.stringify(this.props.data, null, 2) }</pre>
      </>
    );
  }
}
