import React,{ Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  // getDerivedStateFromProps(props, state){
  //   console.log('person.js getDErivedstateform props');
  // }
  shouldComponentUpdate(pnextProps, nextState){
    console.log('person.js shouldComponentUpdate');
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('person.js getSnapshotBeforeUpdate');
  }
  componentDidUpdate() {
    console.log('persons.js componentDidUpdate');
  }
  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
    return (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
      />
    );
  });
  }
  
}

export default Persons;
