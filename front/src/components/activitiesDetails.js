import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ActivityDetails = ({ activity}) => {

    return (
      <div className="activity-details">
        <h4>{activity.name}</h4>
        <p><strong>Description : </strong>{activity.description}</p>
        <Link to="/viewActivity" state={{type:activity.type, url:activity.url}}>
        <Button className="activity-button" 
        variant="outline-secondary" >View activity</Button>{' '}</Link>
      </div>
    )
  }
   
  export default ActivityDetails