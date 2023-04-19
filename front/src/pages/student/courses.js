import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"




// components
import CoursDetails from "../../components/coursDetails"

  const StudentCourses = () => {

  const [cours, setCours] = useState(null)
  const [query, setQuery] = useState("");

  const {user} = useAuthContext()


  const getCoursesStudent = async () => {
    const fetchCourss = async () => {
      try{
      const response = await fetch('/api/teacher/allcourses', {
        headers: {'Authorization': `Bearer ${user.accessToken}`}
      })
      const json = await response.json()
        setCours(json)
      }catch(err){
        console.error(err.message)
      }
    }

    if (user) {
      fetchCourss()
    }
  };



  useEffect(() => {
    getCoursesStudent();
  }, [user, query])

  return (
    <>
    <div className="home">

      <div className="coursactivites">

        {cours && cours.map(cours => (
          <CoursDetails cours={cours} key={cours.id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default StudentCourses