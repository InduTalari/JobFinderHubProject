import { HiOutlineLocationMarker } from 'react-icons/hi'
import { CgWorkAlt } from 'react-icons/cg'
import { BsStar } from 'react-icons/bs'

import './SimilarJobCard.css'

const SimilarJobCard = ({ job }) => {
  return (
    <li className="similar-job-card">
      <div className="job-item-logo-container">

        <img
          src={job.company_logo_url}
          className="company-logo-img"
          alt="similar job company logo"
        />

        <div className="title-rating-container">
          <h1 className="job-item-title">
            {job.title}
          </h1>

          <div className="rating-container">
            <BsStar />

            <p className="job-item-rating">
              {job.rating}
            </p>
          </div>
        </div>

      </div>

      <h1 className="dis-heading">
        Description
      </h1>

      <p className="job-item-description-para">
        {job.job_description}
      </p>

      <div className="loc-emp-container">

        <div className="loc-emp-section">
          <HiOutlineLocationMarker />

          <p>
            {job.location}
          </p>
        </div>

        <div className="loc-emp-section">
          <CgWorkAlt />

          <p>
            {job.employment_type}
          </p>
        </div>

      </div>
    </li>
  )
}

export default SimilarJobCard