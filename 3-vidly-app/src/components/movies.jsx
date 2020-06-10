import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../util/Paginate";
import ListGroup from "./common/listgroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import _ from "lodash";
import Input from "./common/input";
import SearchBox from "./common/searchBox";
import Joi from "joi-browser";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
    selectedGenre: "",
  };

  schema = {
    search: Joi.string(),
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  getMoviesToRender = () => {
    const {
      movies,
      selectedGenre,
      currentPage,
      pageSize,
      sortColumn,
      searchQuery,
    } = this.state;

    let filteredMovies = movies;

    if (searchQuery) {
      filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filteredMovies = movies.filter(
        (movie) => movie.genre._id === selectedGenre._id
      );
    }

    // Sorting the filtered movies
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    // Paginating the sorted movies
    const pagedMovies = paginate(sortedMovies, currentPage, pageSize);
    return { movies: pagedMovies, count: filteredMovies.length };
  };

  render() {
    const {
      movies: allMovies,
      selectedGenre,
      currentPage,
      pageSize,
      genres,
      sortColumn,
      searchQuery,
    } = this.state;

    if (allMovies.length === 0)
      return <p>There are no movies in the database</p>;

    const { movies: pagedMovies, count } = this.getMoviesToRender();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col">
          <Link to="/movies/new" className="btn btn-primary mb-4">
            New Movie
          </Link>
          <p>Showing {count} movies in the database</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={pagedMovies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleClick = (movie) => {
    console.log("New Movie");
    return <Link to="/movies/new">MovieForm</Link>;
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (searchQuery) => {
    this.setState({ searchQuery, selectedGenre: null, currentPage: 1 });
  };
}

export default Movies;
