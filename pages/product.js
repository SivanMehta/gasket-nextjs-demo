import React, { Component } from 'react';
import Page from '../components/page';

export default class extends Component {
  static async getInitialProps ({ query }) {
    return {
      id: query.id
    };
  }

  render () {
    return (
      <Page>
        { this.props.id }
      </Page>
    )
    
  }
}
