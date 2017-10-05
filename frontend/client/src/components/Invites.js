import React, { Component } from 'react';
import { Card, Container, Icon, Image, List } from 'semantic-ui-react';
import { NavLink, Link, Redirect } from 'react-router-dom';

class Invites extends Component {
  images = ['daniel.jpg', 'elliot.jpg', 'matthew.png', 'rachel.png'];

  render() {
    var { listings } = this.props;

    return (
      <Card.Group itemsPerRow={3}>
        {listings.map(listing => (
          <Card>
            <Card.Content>
              <Image src={'/' + this.images[Math.floor(Math.random() * this.images.length)]} size='mini' floated='left'/>
              <Card.Header>{listing.posted_by}</Card.Header>
              <Card.Meta>{listing.activity}</Card.Meta>
              <Card.Description>{`Schedule on ${listing.scheduled} for ${listing.duration} hours`}</Card.Description>
              <Card.Content extra>
                {(<a><Icon name='user' /> {listing.buddies} {listing.buddies === 1 ? 'buddy' : 'buddies'} </a>)}
              </Card.Content>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    )
  }

}

export default Invites;