import React, { useState } from 'react'

const Accordion = ({item}) => {

    const [status, setStatus] = useState(false)


  return (
    <div key={item.id} className='questions__accordion'>
    <div className={`questions__accordion-quest ${status ? 'questions__accordion-quest_active' : ''}`}>
        <p>{item.questions}</p>

        <div className='questions__accordion-arrow'>

            {
            status
             ? <span onClick={() => setStatus(false)} className='questions__accordion-close'>
             <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M10.59 0.590088L6 5.17009L1.41 0.590088L0 2.00009L6 8.00009L12 2.00009L10.59 0.590088Z" fill="#323232"/></svg>
        </span>
           : <span onClick={() => setStatus(true)}  className='questions__accordion-open'>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.41 7.40991L6 2.82991L10.59 7.40991L12 5.99991L6 -8.72135e-05L-1.23266e-07 5.99991L1.41 7.40991Z" fill="#323232"/></svg>
        </span>}
              

        </div>
        
    </div>
    <div className={`questions__accordion-answers ${status ? 'questions__accordion-answers_active' : ''}`}>
    {item.answers}
    </div>
</div>
  )
}

export default Accordion