import { Link } from 'react-router-dom'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsStar } from 'react-icons/bs'
import { CgWorkAlt } from 'react-icons/cg'

import './JobCard.css'

const JobCard = ({ job }) => {
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = job

  return (
    <Link
      to={`/jobs/${id}`}
      className="link-style"
    >
      <li className="job-item">

        <div className="job-item-logo-container">

          <img
            src={companyLogoUrl}
            className="company-logo-img"
            alt="company logo"
          />

          <div className="title-rating-container">

            <h1 className="job-item-title">
              {title}
            </h1>

            <div className="rating-container">
              <BsStar />

              <p className="job-item-rating">
                {rating}
              </p>
            </div>

          </div>
        </div>

        <div className="loc-empType-pac-container">

          <div className="loc-emp-container">

            <div className="loc-emp-section">
              <HiOutlineLocationMarker />

              <p>{location}</p>
            </div>

            <div className="loc-emp-section">
              <CgWorkAlt />

              <p>{employmentType}</p>
            </div>

          </div>

          <h1 className="package-heading">
            {packagePerAnnum}
          </h1>

        </div>

        <hr />

        <h1 className="dis-heading">
          Description
        </h1>

        <p className="job-item-description-para">
          {jobDescription}
        </p>

      </li>
    </Link>
  )
}

export default JobCard