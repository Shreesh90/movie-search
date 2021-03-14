import React, {Component} from 'react';
import './App.css';
import MovieRow from './components/MovieRow';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
    console.log("Initialization Done!");

    // var movies = [
    //   {id: "0", title: "Avengers", summary: "Aweosome skjv kfv ialb ible"},
    //   {id: "1", title: "Jalikattu", summary: "Aweosome skjv kfv ialb ible"},
    //   {id: "2", title: "DDLJ", summary: "Aweosome skjv kfv ialb ible"}
    // ]

    // var movieRows = [];
    // movies.forEach((movie) => {
    //   // console.log(movie.title);
    //   const movieRow = <MovieRow movie={movie}/>
    //   movieRows.push(movieRow);
    
    // })

    // this.state = {rows: movieRows}

    this.performSearch();
  }

  performSearch(searchTerm){
    console.log(searchTerm);
    console.log("Searching Begins here!");
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=5b5697ad5768a336c822ac789791685f&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched Movies Successfully");
        const results = searchResults.results;
        // console.log(results[0]);
        
        var movieRows = [];

        results.forEach((movie) => {
          // console.log(movie.title);
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;   
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow);
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch the data");
      }
    })
  }

  handleChange(event) {
    // console.log(event.target.value);
    const bound = this;
    bound.performSearch(event.target.value);
  }

  
  render() {
    return (
    <div>
      <table className="titleBar">
        <tbody>
          <tr>
            <td> 
              <img width="50" src="https://image.shutterstock.com/image-photo/photo-old-movie-projector-260nw-92369284.jpg"></img>
            </td>
            <td> 
              <h1 style={{paddingLeft: 16}}> MovieDB Search </h1> 
            </td>
          </tr>
        </tbody>
      </table>

      <input style={{
        fontSize: 24,
        padding: 16,
        display: "block",
        width: "97.6%"
      }} placeholder="Enter Movie Name to Search" onChange={this.handleChange.bind(this)}>
      </input>
      
      {this.state.rows}
      {/* <MovieRow /> */}
    </div>
    );
  };
}

export default App;
