import React, { useState, useEffect } from 'react';
import './CurrentData.css';
import Contest from './current/Data';

const CurrentData = () => {
  let [contest, setContest] = useState([])

  useEffect(() => {
    fetchContest()
  },[])

  let fetchContest = () => {
    let url = 'http://localhost:3000/covermeup';
    fetch(url)
      .then(res => res.json())
      .then(data => setContest(data)
      )
  }
  return (
    <table>
      <thead>
        <tr>
          <td>Name of Artist</td>
          <td>Base of Contest</td>
          <td>Video Url</td>
        </tr>
      </thead>
      <tbody>
        {contest.map((contest, index) => {
          return ( 
            <Contest contest={contest} index={index} />
          )
        })}
      </tbody>
    </table>
  )
}
export default CurrentData;