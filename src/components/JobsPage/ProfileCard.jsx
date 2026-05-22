import './ProfileCard.css'

const ProfileCard = ({profile}) => {
  const {profileImageUrl, name, shortBio} = profile

  return (
    <div className="profile-section">
      <img src={profileImageUrl} className="profile-img" alt="profile" />

      <h1 className="name-heading">{name}</h1>

      <p className="short-bio-para">{shortBio}</p>
    </div>
  )
}

export default ProfileCard
