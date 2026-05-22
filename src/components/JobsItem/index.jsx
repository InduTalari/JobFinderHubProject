import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SkillItem from './SkillItem'
import SimilarJobCard from './SimilarJobCard'

import './index.css'

const JobsItem = () => {
  const {id} = useParams()

  const [jobData, setJobData] = useState({})
  const [similarJobsData, setSimilarJobsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getJobDetails = async () => {
      const jwtToken = Cookies.get('jwt_token')

      const url = `https://apis.ccbp.in/jobs/${id}`

      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        setJobData(data.job_details)
        setSimilarJobsData(data.similar_jobs)
      }

      setLoading(false)
    }

    getJobDetails()
  }, [id])

  if (loading) {
    return (
      <div data-testid="loader">
        <Loader
          type="ThreeDots"
          color="#ffffff"
          height={50}
          width={50}
        />
      </div>
    )
  }

  return (
    <div className="jobs-item-container">
      <Header />

      <div className="jobs-item-card">
        <h1>{jobData.title}</h1>

        <p>{jobData.job_description}</p>

        <h1>Skills</h1>

        <ul className="skills-section">
          {jobData.skills?.map(skill => (
            <SkillItem
              key={skill.name}
              skill={skill}
            />
          ))}
        </ul>

        <h1>Similar Jobs</h1>

        <ul>
          {similarJobsData.map(job => (
            <SimilarJobCard
              key={job.id}
              job={job}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default JobsItem