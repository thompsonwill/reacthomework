import React from "react";
import PeopleCard from '../PeopleCard';
import Wrapper from "../Wrapper";
import people from "../../people.json";
import Title from "../Title"
import Header from "../Header";

class Game extends React.Component {

    state = {
        score: 0
    };
  
  
    handleClick = (id) => {
      this.setState({ score: this.state.score + 1 });
    };
  
  
  
  
  
    render() {
      return (
        <Wrapper>
          <Title>Hello, React Homework</Title>
          <Header></Header>
          {people.map(people => (
            <PeopleCard
              id={people.id}
              handleClick={this.handleClick}
              key={people.id}
              name={people.name}
              image={people.image}
            />
          ))}
        </Wrapper>
      );
    }
  }
  
  export default Game;