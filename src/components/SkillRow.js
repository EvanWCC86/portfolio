import React from 'react'

const SkillRow = ({title, percentage}) => {
  return (
    <div className="skillRow">
      <p>{title}</p>
      <div className="percentage">
          <span style={{width: `${percentage}`}}></span>
          <span className="percentage_number">{percentage}</span>
      </div>
    </div>
  )
}

export default SkillRow
