import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RemoveReward = () => {
  const [rewards, setRewards] = useState([]);
  const [selectedReward, setSelectedReward] = useState('');
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
  };

  const handleRewardRemove = (e) => {
    e.preventDefault();
    if (!selectedReward) {
      setMessage('Please select a reward to remove.');
      return;
    }

    // Find the reward object with the selected name
    const selectedRewardObject = rewards.find((reward) => reward.name === selectedReward);

    if (!selectedRewardObject) {
      setMessage('Selected reward not found.');
      return;
    }

    // Send the DELETE request to the backend to remove the reward
    axios.delete(`http://localhost:8087/rewards/${selectedRewardObject.id}`)
      .then((res) => {
        setMessage('Reward removed successfully!');
        getRewards(); // Refresh the rewards after the removal
      })
      .catch((err) => {
        setMessage('Error removing reward.');
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Remove Reward</h2>
      <form onSubmit={handleRewardRemove}>
        <div>
          <label>Select Reward to Remove:</label>
          <select onChange={handleRewardChange} value={selectedReward}>
            <option value="">Select a reward</option>
            {rewards.map((reward) => (
              <option key={reward.id} value={reward.name}>
                {reward.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Remove Reward</button>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
};

export default RemoveReward;
