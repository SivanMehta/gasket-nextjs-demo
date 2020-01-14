/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Page from '../components/page';
import ProductCard from '../components/product-card';
import fetch from '@gasket/fetch';

export default class IndexPage extends Component {
  static async getInitialProps() {
    const req = await fetch('http://localhost:8080/api/products');
    const data = await req.json();

    return { data };
  }

  render() {
    const { data } = this.props;
    return (
      <Page>
        <div className="jumbotron">
          <h1 className="display-4">Hi there</h1>
          <p className="lead">Please buy our products</p>
        </div>
        <div className='row'>
          { data.map(p => <ProductCard { ...p }/>) }
        </div>
      </Page>
    );
  }
}
