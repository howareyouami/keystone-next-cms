import { Component } from 'react';

class Products extends Component {
  render() {
    return (
      <div className='container'>
        <style jsx>{`
            .header {
              padding: 16px 16px;
            }
            .content {
              padding: 16px 16px;
            }
            .post {
              margin-bottom: 16px;
            }
        `}</style>
        <div className='header'>
          <h1>Keystone Next Example</h1>
        </div>
        <div className='content'>
            PRODUCTS 
        </div>
      </div>
    );
  };
}

export default Products;