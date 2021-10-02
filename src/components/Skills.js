import React from 'react'
import {GiSkills} from 'react-icons/gi'
import SkillRow from './SkillRow'
const Skills = () => {
  return (
    <section className="skills">
         <div className="skills_headline">
              <button>
               <GiSkills />
              </button>
              <h3>Skills</h3>
         </div>
          <div className="front-end">
               <SkillRow title="html" percentage="75%" />
               <SkillRow title="css" percentage="75%" />
               <SkillRow title="sass" percentage="75%" />
               <SkillRow title="style-components" percentage="70%" />
               <SkillRow title="javascript" percentage="65%" />
               <SkillRow title="react" percentage="75%" />
               <SkillRow title="redux" percentage="75%" />
               <SkillRow title="typescript" percentage="60%" />
               
          </div>
          <div className="backend">
               <SkillRow title="node" percentage="60%" />
               <SkillRow title="python" percentage="60%" />
               <SkillRow title="django" percentage="60%" />
               <SkillRow title="next" percentage="70%" />
               
          </div>
          <div className="others">
               <SkillRow title="mongoDB" percentage="70%" />
               <SkillRow title="git" percentage="70%" />
               <SkillRow title="graphQL" percentage="70%" />
               
          </div>
    </section>
  )
}

export default Skills
