import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: []
    };
  }

  componentDidMount() {
    fetch('http://api.meetup.com/Latinx-Tech-PDX/events')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            events: result
          });
        },
        (error) => {
          this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
  const { error, isLoaded, events } = this.state;
  if (error) {
    return
      <div>
        <h1>Woops, looks like something went wrong</h1>
      </div>;
  } else if (!isLoaded) {
     return <div>Loading...</div>;
   } else {
     return (
       <ul>
         {events.map(event => (
           <li key={event.id}>
             {event.name}
           </li>
         ))}
       </ul>
     );
   }
  }

}

export default Calendar
