// import React from 'react'
// import axios from 'axios'
// import { useEffect } from 'react'

// const ViewReward = () => {
//   useEffect(()=>{ getRewards() }, [])
//   const getRewards= ()=>{
//     axios.get('http://localhost:8087/rewards').then(res=> console.log(res.data)).catch(err=> console.log(err))
//   }
//   return (
//     <div>GetReward</div>
//   )
// }

// export default ViewReward
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewRewards = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    getRewards();
  }, []);

  const getRewards = () => {
    axios.get('http://localhost:8087/rewards')
      .then((res) => setRewards(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>View Rewards</h2>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.id}>
            {reward.name} - Price: {reward.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewRewards;
