import { Component } from 'react';
import Header from '../components/Header'
class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="center-content">
          <h1>Home</h1>
        </div>
      </>
    );
  };
}

export default Home;