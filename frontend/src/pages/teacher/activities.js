import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useActivityContext } from "../../hooks/useActivityContext"
import AjoutActivite from "../../components/ajouteractivite";

// components
import ActivityDetails from "../../components/activitiesDetails"

  const TeacherActivities = () => {
  const [activities, setActivities] = useState(null)
  const {user} = useAuthContext()
  const {coursID} = useActivityContext()

  const { roles } = {...user}

  let query = coursID

  if(roles){
    var role = roles[0]
    console.log(role )
  }

  useEffect(() => {
    console.log(coursID)
    const fetchActivites = async () => {
      try{
      const response = await fetch(`/api/activity/${query}`, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${user.accessToken}`}
      })
      const json = await response.json()

      if (response.ok) {
        setActivities(json)
      }
    }catch(err){
      console.error(err.message)
    }}

    if (user && query) {
      fetchActivites()
    }
  }, [user,query,coursID])


  return (
    <div className="home">
      <div className="rechercheajout">
   
      {role==="ROLE_TEACHER" && <AjoutActivite />}
      </div>
      <div className="coursactivites">
        {activities && activities.map(activity => (
          <ActivityDetails navigation activity={activity} key={activity.id} />
        ))}
      </div>
    </div>
  )
}

export default TeacherActivities