import React from "react";

class Moviesliste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click:false,
            movies: [],
            selectFilm:"",
            inputSearchValue:"",
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleClickInput = this.handleClickInput.bind(this);

      }

      handleChangeInput(e) {
        const { value } = e.target;
        this.setState({
          inputSearchValue: value
        });
      }
      handleClickInput(c){
        this.setState({
            click: true,
            selectFilm:c
          });
        }
  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=b95a398c6c65c248eab3893cd6e36e2b&sort_by=popularity.desc")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
        movies: data.results,
        });
      });
  }

  render() {
      
    const {movies,inputSearchValue,click,selectFilm} = this.state;
    const Moviesliste=movies.filter((item)=>item.title.toLowerCase().indexOf(inputSearchValue)!==-1);


    return (
        <div>
          <h1> Liste</h1>
          <label for="nom"> Filtrer les noms:</label>
          <input id="nom" type="text" name="nom" value={inputSearchValue} onChange={this.handleChangeInput}/>
       
      {!click &&
        <>
        <h1> Liste</h1>
          <label for="nom"> Filtrer les noms:</label>
          <input id="nom" type="text" name="nom" value={inputSearchValue} onChange={this.handleChangeInput}/>
      <table>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>release_date</th>
              </tr>
              {Moviesliste.map((item) => (
                <tr>
                  <th>{item.id}</th>
                  <th
                  
                  onClick={()=>this.handleClickInput(item)}
                  > {item.title}</th>
                  <th>{item.release_date}</th>
                </tr>
              ))}
            </table>
        </>
            }
{click && 
        <>
        <tr>
        <th><p>ID:{selectFilm.id}</p></th>
        <th><p>Title:{selectFilm.title}</p></th>
        <th><p>Date de sortie:{selectFilm.release_date}</p></th>
        <th><img src={"https://image.tmdb.org/t/p/w500"+this.state.selectFilm.backdrop_path} ></img></th>
        </tr>
        </>
            }

     </div>);
}
}

export default Moviesliste;
