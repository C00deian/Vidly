import React from "react";
import Joi from "joi";
import Form from "../../common/Form";
import { getGenres } from "../../services/genresService";
import { getMovie ,saveMovie} from "../../services/movieService";
import { useNavigate, useParams } from "react-router-dom";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  });

  async componentDidMount() {
    const { id } = this.props; // Get movie ID from props
    const {data: genres} = await getGenres();
    this.setState({ genres });

    if (id === "new") return; // If creating a new movie
try {
  
  const {data:movie} = await getMovie(id);
  this.setState({ data: this.mapToModel(movie) });

} catch (err) {
  if (err.response && err.response.status === 404)
  this.props.navigate("/not-found"); 
}
  }

  mapToModel = (movie) => ({
    _id: movie._id,
    title: movie.title,
    genreId: movie.genre._id,
    numberInStock: movie.numberInStock,
    dailyRentalRate: movie.dailyRentalRate,
  });

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.navigate("/"); // Redirect after saving
    console.log("Submitted Movie:", this.state.data);
  };

  render() {
    return (
      <div className="container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "No in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

// Wrapper functional component
const MovieFormWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return <MovieForm navigate={navigate} id={id} />;
};

export default MovieFormWrapper;
