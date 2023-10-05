import React from 'react'
import Label from '../Label'
import ExportData from '../../../data/data'

function LandingSkills() {

  const skillsData = ExportData().info.skills
  const colorSkillsData = ExportData().color.skills

  return (
    <>
        <div className="container">
              <div className="grid grid-cols-4 grid-rows-1 gap-1 md:gap-4 mb-20">
              {
                skillsData.map((data, index) => (
                  <Label text={data} background={colorSkillsData[index]} key={index}></Label>
                ))
              }
              </div>
        </div>
    </>
  )
}

export default LandingSkills