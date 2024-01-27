import React from 'react'
import { skills } from '../data/infoArrays'
import SkillItem from '../components/SkillItem'

const StackList = () => {
    return (
        <div>
            {skills.map((skill, index) => (
                <SkillItem key={index} {...skill} />
            ))}
        </div>
    )
}

export default StackList