import React, { Component } from 'react';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: []
    };
  }

  // Due to CORS issues the follwing fetch won't work unless you install this plug-in in chrome https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

  componentDidMount() {
    fetch('http://api.meetup.com/Latinx-Tech-PDX/events')
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
       events.map(event => (
         <div key={event.id} className="column is-three-fifths is-offset-one-fifth">
           {event.local_date}
           {event.local_time}
           {event.name}
         </div>
       ))
     );
   }
  }

}

export default Events
