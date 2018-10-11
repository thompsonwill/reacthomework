import React from "react";
import PeopleCard from '../PeopleCard';
import Wrapper from "../Wrapper";
import people from "../../people.json";
import Title from "../Title"
import Header from "../Header";
import "./style.css";


// Create Random order of people from our JSON and return a new order.
function randomPeople(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class Game extends React.Component {

  // All the states for our app
  state = {
    people,
    currentScore: 0,
    highScore: 0,
    clicked: [],
    rightWrong: ""
  };


  // Shuffle all the people up after each click and the beginning of each game.
  handleShuffle = () => {
    let shufflePeople = randomPeople(people);
    this.setState({ people: shufflePeople });
  }

  // The start of the game. Wipes out all scores.
  handleInitialize = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      rightWrong: "Wrong! Try again.",
      clicked: []
    });
    this.handleShuffle();
  };


  // This gave me the most problems. I couldn't figure out why id wasn't getting passed, and it was in my PeopleCard file. 
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleInitialize();
    }
  };

  // Creates the scoring for our app.
  handleScore = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "Correct!"
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  // Make the game happen!
  render() {
    return (
      <Wrapper>
        <Title>Click on an image to earn points. Don't click an image more than once!</Title>
        <Header 
          rightWrong={this.state.rightWrong}
          score={this.state.currentScore}
          highScore={this.state.highScore}
        />
          
        {people.map(people => (
          <PeopleCard
            key={people.id}
            handleClick={this.handleClick}
            handleScore={this.handleScore}
            handleInitialize={this.handleInitialize}
            handleShuffle={this.handleShuffle}
            id={people.id}
            name={people.name}
            image={people.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Game;