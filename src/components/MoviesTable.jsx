import React, { Component } from "react";
import Like from "../common/Like";
import Table from "../common/Table";
import { Link } from "react-router-dom";
import authServices from "../services/authServices";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title", content: movie => (<Link to={`/movies/${movie._id}`}>{movie.title }</Link>) },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like onClick={() => this.props.onLike(movie)} liked={movie.liked}  />
      ),
    },
  ];

  deleteColumn = {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    }


  constructor() {
    super()
    const user = authServices.getCurrentUser();
    if (user && user.isAdmin)
      this.columns.push(this.deleteColumn);
}  

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
