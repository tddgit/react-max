import React, { useState, Component } from "react";
import Person from "./Person/Person";
import "./Person/Person.css";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "asdfa", name: "Max", age: 28 },
      { id: "sdfd", name: "Manu", age: 29 },
      { id: "dsdf", name: "Stephanie", age: 26 },
    ],
    otherState: "something",
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   // console.log("Was clicked");
  //   // DONT DO this.state.persons[0].name = 'Maximilian';
  //
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Manu", age: 29 },
  //       { name: "Stepanie", age: 27 },
  //     ],
  //   });
  // };
  //
  nameChangedHanldler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    let doesShow = this.state.showPersons;
    console.log("doesShow", doesShow);
    this.setState({
      showPersons: !doesShow,
    });
    console.log("this.state.showPersons", this.state.showPersons);
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHanldler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div>
        <div className={"Person"}>
          <h1>Hi, I'am a React app</h1>
          <p>This is really working</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons List
          </button>
          {persons}
        </div>
      </div>
    );
  }
}

export default App;

// const App1 = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stepanie", age: 26 },
//     ],
//   });
//
//   const [otherState, setOtherState] = useState("some other value");
//
//   console.log("BEFORE", personsState, otherState);
//
//   const switchNameHandler = () => {
//     // console.log("Was clicked");
//     // DONT DO this.state.persons[0].name = 'Maximilian';
//
//     setPersonsState({
//       persons: [
//         { name: "Maximilian", age: 28 },
//         { name: "Manu", age: 29 },
//         { name: "Stepanie", age: 27 },
//       ],
//     });
//     console.log("AFTER", personsState, otherState);
//   };
//
//   return (
//     <div className={"App"}>
//       <h1>Hi, I'am a React app</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       >
//         My job is teachers
//       </Person>
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//         click={this.switchNameHandler}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       ></Person>
//     </div>
//   );
// };

// <div>
//   <Person
//       name={this.state.persons[0].name}
//       age={this.state.persons[0].age}
//   >
//     My job is teacher
//   </Person>
//   <Person
//       name={this.state.persons[1].name}
//       age={this.state.persons[1].age}
//   >
//     My Hobbies: Racing
//   </Person>
//   <Person
//       name={this.state.persons[2].name}
//       age={this.state.persons[2].age}
//   />
// </div>
