import React from 'react'
import Container from '../Container'
import sprite from '../../assets/sprite.svg'

const Values = () => {
  return (
    <section>
      <Container>
        <h2>Main values of our company</h2>
        <p>EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.</p>
        <ul>
          <li>
            <svg width={16} height={16} >
              <use href={sprite + '#icon-maximize-circle'}></use>
            </svg>
            <h3>Openness</h3>
            <p>to the world, people, new ideas and projects</p>
          </li>
          <li>
            <svg width={16} height={16} >
              <use  href={sprite + '#icon-global-edit'}></use>
            </svg>
            <h3>Responsibility</h3>
            <p>we are aware that the results of our work have an impact on our lives and the lives of future generations</p>
          </li>
          <li>
            <svg width={16} height={16} >
              <use  href={sprite + '#icon-cpu-charge'}></use>
            </svg>
            <h3>Innovation</h3>
            <p>we use the latest technology to implement non-standard solutions</p>
          </li>
          <li>
            <svg width={16} height={16} >
              <use  href={sprite + '#icon-ranking'}></use>
            </svg>
            <h3>Quality</h3>
            <p>we do not strive to be the first among others, but we want to be the best in our business</p>
          </li>
        </ul>
        <h2>Electricity we produced for all time</h2>
        <p><span>1.134.147.814</span>kWh</p>
      </Container>
     </section>
  )
}

export default Values