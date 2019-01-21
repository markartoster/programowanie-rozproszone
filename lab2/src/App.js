import React, { Component } from 'react';
import './App.css';

class App extends Component {
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=a9a044fab959ff29628041fff2fcac7b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);
      
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  state = {
    movies: []
  }

  render() {
    return (
      <div className="App">
        {
          this.state.movies.map(movie => <h2 key={movie.title} >{movie.title}</h2>)
        }
      </div>
    );
  }
}

export default App;
