import React, { Component } from 'react';


class MovieDetail extends Component {
    
    render() {
      const id=this.props.match.params.id
      const movie = this.props.movies[id]
    //   const fentity=fentities.filter(f => {
    //   return f.name.toLowerCase() === name.toLowerCase()
    //     })[0]   
      
        return (
            <div id="movie-details">
                <h1 className="title">{movie.title}({movie.year})</h1>
                <img src={movie.img} alt="" className="movie-img"/>
                <div className="description"> {movie.descrShort}</div>
            </div>
        )
    }
}

export default MovieDetail;
