import React from 'react';
import './MovieRow.css';
class MovieRow extends React.Component {

  viewMovie(){
    // console.log("You are trying to view movie");
    // console.log(this.props.movie.title);
    const movie_url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = movie_url;
  }

    render(){
        return (
      <table key={this.props.movie.id} className="formatTable">
        <tbody>
          <tr>
            <td className="tableCell">
              <img alt="poster" src={this.props.movie.poster_src}></img>
            </td>
            <td className="tableCell">
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input type="button" value="View" onClick={this.viewMovie.bind(this)}></input>
            </td>
          </tr>        
        </tbody>
      </table>
        );
    };
}

export default MovieRow;
