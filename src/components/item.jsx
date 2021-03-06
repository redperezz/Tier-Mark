import React from 'react';

class Item extends React.Component {
  constructor(props) { //
    super(props);
    this.state = {
      itemId: 1,  // passed down via props
      itemName: 'game 1', // from Item service
      itemImage: '',  // from Item service
      availability: '', // from System Requirements service
      feedback: {
        positiveReviews: 90,  // from Reviews service
        numberOfReviews: 526, // from Reviews service
        reviewsFrom: 'Steam'  // from Reviews service
      }
    }
    this.getItem = this.getItem.bind(this);
    this.getAvailability = this.getAvailability.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount  () {
    this.setState({
      itemId: this.props.itemId
    });
    this.getItem();
    this.getAvailability();
    this.getReviews();
  }

  getItem() {
    // This will call out to Item service

    // Fake data generator in case Item service unresponsive
  }

  getAvailability() {
    // This will call out to System Requirements service

    // Fake data generator in case System Requirements service unresponsive
  }

  getReviews() {
    // This will call out to Reviews service

    // Fake data generator in case Reviews service unresponsive
  }

  render() {
    return (
      <div className="item-view">
        ItemId: {this.state.itemId} <br/>
        Name: {this.state.itemName} <br/>
        Systems: {this.state.availability} <br/>
        Good Reviews: {this.state.feedback.positiveReviews}% <br/>
        Total Reviews: {this.state.feedback.numberOfReviews} <br/>
        Reviews From: {this.state.feedback.reviewsFrom} <br/>
      </div>
    )
  }
}

export default Item;
