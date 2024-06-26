/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const PrevDescription = ({descriptions}) => {
  return (
    <div>
      <h1>Previous Description</h1>
      {descriptions?.map((des, idx) => (
        <p key={idx}>{des}</p>
      ))}
    </div>
  )
}

export default PrevDescription