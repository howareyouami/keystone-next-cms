import { Component } from 'react';
import axios from 'axios'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'

import { Container, CardDeck, Card } from 'react-bootstrap'

class App extends Component {

  static async getInitialProps() {
    let response = await axios.get('http://localhost:3000/api/posts');
    return { posts: response.data };
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <div className='content'>
            <CardDeck>
              {this.props.posts.map((post, i) => {
                return (
                  <BlogCard
                    imageUrl={post.image ? post.image.secure_url : "https://picsum.photos/200/300"}
                    title={post.title}
                    brief={post.content.brief}
                  />
                );
              })}
            </CardDeck>
          </div>
        </Container>
      </>
    );
  };
}

export default App;