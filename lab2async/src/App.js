import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    try {
      const res = fetch('https://api.themoviedb.org/3/discover/movie?api_key=a9a044fab959ff29628041fff2fcac7b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  state = {
    movies: [],
    render: false
  }
  
  checkMovies = () => {
   console.log(this.state.movies);
   
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.checkMovies}>Check Console-log</button>
        {
          this.state.movies.map(movie => <h2>{movie.title}</h2>)
        }
        
      </div>
    );
  }
}

export default App;
