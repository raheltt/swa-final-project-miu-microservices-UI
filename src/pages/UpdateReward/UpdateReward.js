import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateReward = () => {
  const [rewards, setRewards] = useState([]);
  const [selectedReward, setSelectedReward] = useState('');
  const [updatedReward, setUpdatedReward] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    getRewards();
  }, []);

  const getRewards = () => {
    axios.get('http://localhost:8087/rewards')
      .then((res) => setRewards(res.data))
      .catch((err) => console.log(err));
  };

  const handleRewardChange = (e) => {
    setSelectedReward(e.target.value);
    setUpdatedReward(e.target.value); // Initialize the input with the selected reward name
  };

  const handleRewardUpdate = (e) => {
    e.preventDefault();
    if (!selectedReward || !updatedReward) {
      setMessage('Please select a reward and provide a new name.');
      return;
    }

    // Find the reward object with the selected name
    const selectedRewardObject = rewards.find((reward) => reward.name === selectedReward);

    if (!selectedRewardObject) {
      setMessage('Selected reward not found.');
      return;
    }

    // Create the updated reward object with the new name
    const updatedRewardObject = { ...selectedRewardObject, name: updatedReward };

    // Send the updated reward object to the backend for the update
    axios.put(`http://localhost:8087/rewards/${selectedRewardObject.id}`, updatedRewardObject)
      .then((res) => {
        setMessage('Reward updated successfully!');
        getRewards(); // Refresh the rewards after the update
      })
      .catch((err) => {
        setMessage('Error updating reward.');
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Update Reward</h2>
      <form onSubmit={handleRewardUpdate}>
        <div>
          <label>Select Reward to Update:</label>
          <select onChange={handleRewardChange} value={selectedReward}>
            <option value="">Select a reward</option>
            {rewards.map((reward) => (
              <option key={reward.id} value={reward.name}>
                {reward.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>New Reward Name:</label>
          <input
            type="text"
            value={updatedReward}
            onChange={(e) => setUpdatedReward(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Reward</button>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
};

export default UpdateReward;
