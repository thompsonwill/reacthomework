import React, { Component } from 'react';
import './App.css';
import PeopleCard from './components/PeopleCard';
import Wrapper from "./components/Wrapper";
import people from "./people.json";
import Title from "./components/Title"
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
<Wrapper>
  <Title>Hello, React Homework</Title>
  <Header></Header>
  {people.map(people => (
    <PeopleCard 
      id={people.id}
      key={people.id}
      name={people.name}
      image={people.image}
    />
  ))}
</Wrapper>
    );
  }
}

export default App;
