// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li className="destination-item-list">
      <img src={imgUrl} alt={name} className="image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}
export default DestinationItem
