import React from "react";
import PeopleCard from '../PeopleCard';
import Wrapper from "../Wrapper";
import people from "../../people.json";
import Title from "../Title"
import Header from "../Header";

// Create Random order of people from the array
function randomPeople(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class Game extends React.Component {

  state = {
    people,
    currectScore: 0,
    highScore: 0
  };


  handleShuffle = () => {
    let shufflePeople = randomPeople(people);
    this.setState({ people: shufflePeople });
  }

  // Testing updating the state
  handleClick = (id) => {
    this.setState({ score: this.state.score + 1 });
    this.handleShuffle();
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