import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {
    constructor(props) {
        super()
        this.state = {
            rented: false
        }
    }

    showRented = () => {
        return (this.props.movies.filter(m => { 
                return ( (m.title.toLowerCase().includes(this.props.search)) &&
                            (m.isRented===true)) }).map(m => {
                return (
                    <Movie movie={m} removeMovie={this.props.removeMovie} key={m.id} />
                )
            })
        )
    }

    // componentDidMount = () => {
    //     let rentedMovies = this.props.movies.filter(m => m.isRented === true)
    //     if (rentedMovies.length > 1) { this.setState({ rented: true }) }
    // }

    componentWillUnmount=()=>{
        this.props.saveBudgetToLS()
    }

    getMovies = () => {
        let search = this.props.search;
       return this.props.movies.filter(m => { 
                return (m.title.toLowerCase().includes(search) && (!m.isRented )) }).map(m => {
                return (
                    <Movie movie={m} addMovie={this.props.addMovie} key={m.id} />
                )
            });
    }

    render() {
        return (
            <div>
                {this.state.rented ? <h5>Rented:</h5> : null}
                <div id="movies-container">
                    {this.showRented()}
                </div>
                <h5 id="movies-title">catalog</h5>
                <hr></hr>
                <div id="movies-container">
                    {this.getMovies()}
                </div>
            </div>
        )
    }
}

export default Catalog