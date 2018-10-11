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
    currentScore: 0,
    highScore: 0,
    clicked: [],
    rightWrong: ""
  };


  handleShuffle = () => {
    let shufflePeople = randomPeople(people);
    this.setState({ people: shufflePeople });
  }

  handleInitialize = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      rightWrong: "You guessed wrong",
      clicked: []
    });
    this.handleShuffle();
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleInitialize();
    }
  };

  handleScore = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "You are right"
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" })
    }
    this.handleShuffle();
  };


  render() {
    return (
      <Wrapper>
        <Title>Hello, React Homework</Title>
        <Header 
          rightWrong={this.state.rightWrong}
        />
          
        {people.map(people => (
          <PeopleCard
            key={people.id}
            id={people.id}
            handleClick={this.handleClick}
            handleScore={this.handleScore}
            name={people.name}
            image={people.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Game;