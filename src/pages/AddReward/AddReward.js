import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const AddReward = () => {
  useEffect(()=>{ addRewards() }, [])
  const addRewards= ()=>{
    axios.get('http://localhost:8087/rewards').then(res=> console.log(res.data)).catch(err=> console.log(err))
  }
  return (
    <div>AddReward</div>
  )
}

export default AddReward