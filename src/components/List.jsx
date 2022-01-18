import React from 'react'
import './list.css'
const List = (props) => {
    return (
        <div className='list'>
           <ul>
				{props.data.map((el, id) => {
					return (
						<div key={id}>
							<h2 className='fnameShow'>{el.fname}</h2>
							<h3 className='lnameShow'>{el.lname}</h3>
							<h1 className='emailShow'>{el.email}</h1>
						</div>
					)
				})}
			</ul> 
        </div>
    )
}

export default List
