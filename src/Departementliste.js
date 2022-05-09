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

    return (
      <div>hello</div>
    );
}
}
  
export default DeppartmentsList;
