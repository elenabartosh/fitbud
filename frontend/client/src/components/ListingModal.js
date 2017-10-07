import React, { Component } from 'react';
import { Modal, Header, Button, Image, Icon } from 'semantic-ui-react';

class ListingModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { listing, open, hideListingModal, user } = this.props;
    console.log('listing modal');

    return (
      <Modal open={open} onClose={hideListingModal} closeIcon dimmer='blurring'>
        <Modal.Header>{listing.title}</Modal.Header>
        
        <Modal.Content image scrolling>
          <Image
            size='small'
            src={user}
            wrapped
          />

          <Modal.Description>
            <Header>{listing.name}</Header>
            <p>Location: <span>{listing.location}</span></p>
            <p>Meetup point: <span>{listing.meetup_spot}</span></p>
            <p>Duration: <span>{listing.duration} hours</span></p>
            <p>Details: <span>{listing.details}</span></p>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions>
          <Button secondary onClick={hideListingModal}>
            Close <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default ListingModal;
