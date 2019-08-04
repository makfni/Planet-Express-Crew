import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';
import { setSearchField } from './Actions.js';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

//dispatch triggers the action -> dispatches into the reducer
const mapDispatchToProps = (dispatch) => { 
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      crew: [],
      searchField: '' 
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ crew: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { crew } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredCrew = crew.filter(crew =>{
      return crew.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !crew.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>PLANET EXPRESS CREW</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary> 
              <CardList crew={filteredCrew} />
            </ErrorBoundary>
           
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);