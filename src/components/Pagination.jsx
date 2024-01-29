import React, { useState } from 'react'


function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = []

    for (let i=1; i<=Math.ceil(totalPosts/postsPerPage);i++ ) {
        pageNumbers.push(i);
    }

    const [activePage, setActivepage] = useState(1);

    const handlepageClick = (number) => {
        setActivepage(number);
        // paginate(number)
    }
    return (
    <div>
        <nav>
            <ul className=''>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a href='#' onClick={() => {
                            handlepageClick(number);
                            paginate(number);
                        }}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination