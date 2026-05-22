import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="home-card-container">
        <div className="description-container">
          <h1 className="home-main-heading">
            Find The Job that Fits Your Life
          </h1>

          <p className="home-para">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>

          <Link to="/jobs" className="find-jobs-btn-link">
            <button className="find-jobs-btn" type="button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
