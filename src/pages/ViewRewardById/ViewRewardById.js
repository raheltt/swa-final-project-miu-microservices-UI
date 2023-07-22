import React, { useState } from 'react';
import axios from 'axios';

const ViewRewardById = () => {
  const [rewardId, setRewardId] = useState('');
  const [reward, setReward] = useState(null);
  const [message, setMessage] = useState('');

  const handleRewardIdChange = (e) => {
    setRewardId(e.target.value);
    setReward(null); // Clear the current reward when the user changes the ID
    setMessage(''); // Clear any previous messages
  };

  const handleViewReward = (e) => {
    e.preventDefault();
    if (!rewardId) {
      setMessage('Please enter a reward ID.');
      return;
    }

    // Assuming you have an API endpoint for fetching a reward by ID
    axios.get(`http://localhost:8087/rewards/${rewardId}`)
      .then((res) => {
        setReward(res.data);
        setMessage('Reward found!');
      })
      .catch((err) => {
        setReward(null);
        setMessage('Reward not found.');
        console.log(err);
      });
  };

  return (
    <div>
      <h2>View Reward by ID</h2>
      <form onSubmit={handleViewReward}>
        <div>
          <label>Enter Reward ID:</label>
          <input
            type="text"
            value={rewardId}
            onChange={handleRewardIdChange}
            required
          />
        </div>
        <button type="submit">View Reward</button>
        {message && <div>{message}</div>}
        {reward && (
          <div>
            <h3>Reward Details</h3>
            <p>ID: {reward.id}</p>
            <p>Name: {reward.name}</p>
            <p>Price: {reward.price}</p>
            {/* Display other reward details as needed */}
          </div>
        )}
      </form>
    </div>
  );
};

export default ViewRewardById;

