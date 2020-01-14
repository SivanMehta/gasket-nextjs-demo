import React, { Component } from 'react';
import Page from '../components/page';
import ProductCard from '../components/product-card';
import fetch from '@gasket/fetch';

export default class extends Component {
  static async getInitialProps ({ query }) {
    const req = await fetch('http://localhost:8080/api/products/' + query.id);
    const data = await req.json();

    return {
      data
    };
  }

  render () {
    return (
      <Page>
        <div style={{ width: '50%' }} >
          <ProductCard { ...this.props.data } />
        </div>
      </Page>
    );
  }
}
