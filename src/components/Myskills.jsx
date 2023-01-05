import React from 'react'
import { Frontend } from './Frontend'
import {Backend } from './Backend'

export const Myskills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">My Skills</h2>
        <span className="section__subtitle">My Skills</span>

        <div className="skills__container container grid">
           <Frontend />
           <Backend />
        </div>
    </section>
  )
}
