import './SkillItem.css'

const SkillItem = ({ skill }) => {
  return (
    <li className="skill-item">
      <img
        src={skill.image_url}
        className="skill-img"
        alt={skill.name}
      />

      <h1 className="skill-heading">
        {skill.name}
      </h1>
    </li>
  )
}

export default SkillItem