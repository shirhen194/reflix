import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {

    addMovie=(e)=>{
      debugger;
      let id=e.target.id
      this.props.addMovie(id)
    }

    removeMovie=(e)=>{
      let id=e.target.id
      this.props.removeMovie(id)
    }

    addOrRemoveButton=()=>{
      let m=this.props.movie
      if(m.isRented){
         return ( <button type="button" className="buy-movie" id={m.id} onClick={this.removeMovie}>-</button>)
      }
      else{         
        return ( <button type="button" className="buy-movie" id={m.id} onClick={this.addMovie}>+</button>)
      }
    }

    render() {
      let m=this.props.movie
      return (<div>
              <Link to={`/movies/${m.id}`}>
                 <div className="movie"  >
                    <div>{m.title}</div>
                    {/* <img src="http://www.ginesmarin.info/web/img/hover/galeria_mas.png" className="buy-movie" alt="not found" id={m.id} onClick={this.addMovie} /> */}
                    
                   <img className="movie-img" src={m.img} alt="" />
                   <br></br>
                 </div>
              </Link>
              {this.addOrRemoveButton()}
              </div>
      )
    }
}

export default Movie