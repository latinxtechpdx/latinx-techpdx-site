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

  componentDidMount () {
    // use a callback script tag on the DOM to avoid
    // need for Meetup's API Key

    // adds script tag on dom with a function that populates our <div id=thedata />
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.async = true;
    script1.innerHTML = 'function receive(events) { ' +
      'console.log("all data", events.data);' + 
      'const nextMeetup = events.data[0]; ' +
      'document.getElementById("nextmeetup").innerHTML=nextMeetup.name; ' +
      'document.getElementById("description").innerHTML=nextMeetup.description; }';
    document.body.appendChild(script1);

    // adds script tag on dom with src pointing to meetup api url passing the name of the 
    // callback function created above
    const script2 = document.createElement("script");
    script2.src = "http://api.meetup.com/Latinx-Tech-PDX/events?callback=receive";
    script2.type = "application/javascript";
    script2.async = true;
    document.body.appendChild(script2);
  }

  render() {

    // what do you think?
    // loop through events here and add an offset background color to even # rows
    return (
      <div>
        <div className="is-size-4" id="nextmeetup"/>
        <div className="is-size-8" id="description"/>
      </div>
    );
  }

}

export default Events
