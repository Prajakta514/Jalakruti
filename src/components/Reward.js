import React from 'react';
import './Reward.css';

const Card = ({ title, content }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card custom-card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Reward = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Rewards</h1>
      <div className="row">
        <Card
          title="Card 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Card 2"
          content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          title="Card 3"
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
      <div className="row">
        <Card
          title="Card 4"
          content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <Card
          title="Card 5"
          content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Card
          title="Card 6"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <div className="row">
        <Card
          title="Card 7"
          content="S"
        />
        <Card
          title="Card 8"
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          title="Card 9"
          content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
      </div>
    </div>
  );
};

export default Reward;
