import React, { Component } from "react";
import { getMovies, getMovie, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    return (
      <React.Fragment>
        {<br></br>}
        {this.getCount()}
        {<br></br>}
        {this.state.movies.length > 0 && this.getTable()}
      </React.Fragment>
    );
  }

  getCount() {
    if (this.state.movies.length === 0)
      return <h5>No movies in the database</h5>;
    return <h5>Showing {this.state.movies.length} movies in the database</h5>;
  }

  getTable() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  handleDelete = (movie) => {
    this.setState(deleteMovie(movie._id));
  };
}

export default Movies;
