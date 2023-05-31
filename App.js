import React from 'react';
import MovieList from './MovieList';
import Navbar from './Navbar'
import {movies} from './moviesData'
import './index.css'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0
    }
  }

  handleIncStars = (movie) => {

    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5;

    this.setState({
      movies: movies
    })
  }


  handleDecStars = (movie) => {

    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars <= 0) {
      return;
    }
    movies[mid].stars -= 0.5;

    this.setState({
      movies: movies
    })
  }

  handleToggleFav = (movie) => {

    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    this.setState({
      // movies: movies is same as just writing movies
      movies
    })
  }

  handleToggleCart = (movie) => {

    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].inCart = !movies[mid].inCart;

    if(movies[mid].inCart) {
      cartCount += 1;
    }
    else{
      cartCount -= 1;
    }

    this.setState({
      // movies: movies is same as just writing movies
      movies,
      cartCount
    })
  }

  render() {

    const {movies, cartCount} = this.state;
    return (
      <>

        <Navbar cartCount = {cartCount}/>
        <MovieList movies = {movies} 
                    addStars= {this.handleIncStars}
                    decStars= {this.handleDecStars}
                    toggleFav= {this.handleToggleFav}
                    toggleCart= {this.handleToggleCart}
                    key= {movies.id} />
      </>
    );

  }
}

export default App;
