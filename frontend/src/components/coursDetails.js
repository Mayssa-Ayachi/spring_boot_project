import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useActivityContext } from "../hooks/useActivityContext"

const CoursDetails = ({ cours }) => {
  const { dispatch } = useActivityContext()

  const updateCoursID= ()=>{
    // update the coursID context
    localStorage.setItem('coursID', JSON.stringify(cours.id))
    dispatch({type: 'Activity', payload: cours.id })
  }


    return (
      <div className="activity-details">
        <img className="image" alt="course" src={cours.url}></img>
        <h4>{cours.name}</h4>
        <p><strong>Description : </strong>{cours.description}</p>
        {<Link to={{pathname:"/courseActivities"}}><Button className="activity-button" variant="outline-secondary" onClick={updateCoursID}>View activities</Button></Link>}
        {}
      </div>
    )
  }
  
  export default CoursDetails