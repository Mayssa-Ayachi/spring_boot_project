import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"

// components
import CoursDetails from "../../components/coursDetails"
import AjoutCours from "../../components/ajouterCours";

  const TeacherCourses = () => {
  const [cours, setCours] = useState(null)

  const {user} = useAuthContext()
  const { id } = {...user}
  let query = id;
    
    const fetchCourss = async () => {
      try{
      const response = await fetch(`/api/teacher/mycourses/${query}`, {
        headers: {'Authorization': `Bearer ${user.accessToken}`}
      })
      const json = await response.json()
        setCours(json)
      }catch(err){
        console.error(err.message)
      }
    };


  useEffect(() => {
    fetchCourss();
  }, [user, query])

  return (
    <>
    <div className="home">
      <div className="rechercheajout">
    <AjoutCours /></div>
      <div className="coursactivites">

        {cours && cours.map(cours => (
          <CoursDetails cours={cours} key={cours.id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default TeacherCourses