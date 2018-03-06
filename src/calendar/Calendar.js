import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: []
    };

  componentDidMount() {
    fetch('http://api.meetup.com/Latinx-Tech-PDX/events')
    // This request fails due to CORS issues. It will work in chrome if you install this plug inhttps://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi 
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
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
    return <div>Error: {error.message}</div>;
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
