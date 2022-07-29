import React from 'react'

export default function CardContest(props) {
  const {head, body, icon} = props.cardEl;
  return (
    <li>
        <article className="managed__card">  
            <div className="managed__card-header">
              <img src={icon} alt="logo" />
              <h6>{head}</h6>
            </div>
            <div className="managed__card-footer">
              <p>{body}</p>
            </div>
        </article>
    </li>
  )
}
