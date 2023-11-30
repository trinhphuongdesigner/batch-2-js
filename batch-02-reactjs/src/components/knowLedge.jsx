function KnowLedge(props) {
  console.log('««««« props »»»»»', props);
  return (
    <li className='know-ledge'>{props.skill}</li>
  )
};

export default KnowLedge;