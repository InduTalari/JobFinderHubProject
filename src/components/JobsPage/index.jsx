import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import ProfileCard from './ProfileCard'
import JobCard from './JobCard'

import './index.css'

const JobsPage = () => {
  const [profile, setProfile] = useState({})
  const [jobsList, setJobsList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const profileResponse = await fetch(
        'https://apis.ccbp.in/profile',
        options,
      )

      const profileData = await profileResponse.json()

      const jobsResponse = await fetch(
        `https://apis.ccbp.in/jobs?search=${searchInput}`,
        options,
      )

      const jobsData = await jobsResponse.json()

      if (profileResponse.ok && jobsResponse.ok) {
        setProfile({
          profileImageUrl: profileData.profile_details.profile_image_url,

          name: profileData.profile_details.name,

          shortBio: profileData.profile_details.short_bio,
        })

        const updatedJobsData = jobsData.jobs.map(each => ({
          companyLogoUrl: each.company_logo_url,
          employmentType: each.employment_type,
          id: each.id,
          jobDescription: each.job_description,
          location: each.location,
          packagePerAnnum: each.package_per_annum,
          rating: each.rating,
          title: each.title,
        }))

        setJobsList(updatedJobsData)
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const onSearch = () => {
    getData()
  }

  if (loading) {
    return (
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
      </div>
    )
  }

  return (
    <div className="jobs-container">
      <Header />

      <div className="jobPage-container">
        <div className="left-section">
          <ProfileCard profile={profile} />
        </div>

        <div className="right-section">
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              className="search-input"
            />

            <button
              type="button"
              className="search-btn"
              onClick={onSearch}
              data-testid="searchButton"
            >
              <BsSearch />
            </button>
          </div>

          <ul>
            {jobsList.map(eachJob => (
              <JobCard key={eachJob.id} job={eachJob} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JobsPage
