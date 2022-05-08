import React from "react";

class DeppartmentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearchValue: "",
      items: [],
      DataisLoaded: false
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  handleChangeInput(e) {
    const { value } = e.target;
    this.setState({
      inputSearchValue: value
    });
  }
  componentDidMount() {
    fetch("https://geo.api.gouv.fr/departements")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          items: data,
          DataisLoaded: true
        });
      });
  }
  render() {
const { DataisLoaded, items,inputSearchValue } = this.state;
const DeppartmentsList=items.filter((dep))=>items.nom.toLowerCase().indexOf(inputSearchValue)!==-1);
      return (
        <div clasName="App">
          <h1> Liste des departements Français</h1>
          <label for="nom"> Filtrer les noms:</label>
          <input id="nom" type="text" name="nom" Value="inputSearchValue" onChage={this.handleChangeInput}/>
<table>
  <tr className="tab1">
    <th>Code</th>
    <th>Code de la région</th>
    <th>Nom de la région</th>
    </tr>
    {DeppartmentsList.map(items)=>(
      <tr className="tab2">
     <th>{items.code}</th>
     <th>{items.codeRegion}</th>
     <th>{items.nom}</th>
     </tr>
        ))}
      </table>
    )};
  }
  
export default DeppartmentsList;
