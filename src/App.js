import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Catalog from './components/Catalog'
import MovieDetail from './components/MovieDetail'
 
class App extends Component {
  constructor() {
    super()
    this.state = {
    budget:10,
    movies:[
      { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
      { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
      { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
      { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
      { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
    ],
    search:"",
    STORAGE_ID:'Reflix'
    }
  }

  addMovie=(id)=>{
    if((this.state.budget-3)<=0){return alert("You dont have enough budget")}
    let newMoviesArr=[...this.state.movies]
    newMoviesArr=newMoviesArr.map(item=>{
      if (item.id.toString()===id){
        return {...item,isRented:true};
      }
      return item;
    })

    this.setState({movies: newMoviesArr,
      budget:(this.state.budget-3)}, this.saveBudgetToLS)
  } 

  removeMovie=(id)=>{
    let newMoviesArr=this.state.movies.map(item=>{
      if (item.id.toString()===id){
        return {...item,isRented:false};
      }
      return item;
    })
    this.setState({movies: newMoviesArr,
      budget:(this.state.budget+3)},this.saveBudgetToLS)
  }

  searchMovie=(event)=>{ 
      const target = event.target;
      const value = target.value;

      this.setState({
        search: value,
      });
  }

  getFromLocalStorage = ()=> {
    return parseInt(localStorage.getItem(this.state.STORAGE_ID) || '10');
  }

  saveBudgetToLS=()=>{
    localStorage.setItem(this.state.STORAGE_ID, JSON.stringify(this.state.budget));
    this.setState({
      budget:this.getFromLocalStorage()
    });
  }


  componentDidMount=()=>{
    this.setState({
      budget:this.getFromLocalStorage()
    });
  }



  render() {
  // const state = this.state
  return (
    <Router>
      <div className="App">
        <div id="main-links">
          {/* Main Links */}
          <Link to="/">Home </Link>
          <Link to="/catalog">Catalog</Link> <span id="reflix">Reflix</span>
                    <input type="text" id="search" placeholder="search..."  value={this.state.search} onChange={this.searchMovie}/>
          <h5>Budget: {this.state.budget}</h5>
        </div>
        {/* Routes go here v */}
          <Route path="/" exact component={Landing} />
          <Route path="/catalog" exact render={() => <Catalog movies={this.state.movies} addMovie={this.addMovie} removeMovie={this.removeMovie} saveBudgetToLS={this.saveBudgetToLS} search={this.state.search}/>} />
          <Route path="/movies/:id" exact render={({ match }) => <MovieDetail match={ match } movies={this.state.movies} />}/>
          {/* <Route path="/directory/:fentities/:name" exact render={({ match }) => <Fentity match={ match } state={state} />}/>
          <Route path="/catalog" exact component={Catalog} /> */}
        {/* Routes go here ^ */}
      </div>
    </Router>
  );
 }
}

export default App;
