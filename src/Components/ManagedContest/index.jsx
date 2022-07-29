import React from 'react'
import CardContest from './CardContest'
import './ManagedContest.scss'
import title from './title.json'
import dataBase from './db.json'


export default function ManagedContest() {
  return (
   
    <section className='managed__contest'>
      <div className='managed__contest-info'>
        <h2>{title.title_1}</h2>
        <h6>{title.title_2}</h6>
        <p>{title.title_3}</p>
        <ul className='managed__contest-card'>
          {dataBase.map((card, index) => <CardContest cardEl={card} key={index}/>)}
       </ul> 
        <a className='managed__contest-button' href="">{title.buttonTxt}</a>
      </div>
    </section>

   
    

  )
}

