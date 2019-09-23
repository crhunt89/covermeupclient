import React from 'react';

const Contest = (props) => {
  return(
    <tr key={props.index}>
      <td>{props.data.artist}</td>
      <td>{props.data.nameOfContest}</td>
      <td>{props.data.video}</td>
    </tr>
  )
}
export default Contest;