import React from 'react'

const Pagination = ({ paginate, firstPage, lastPage, currentPageNumber }) => {

    return (
        <div>
            <section className="pagination" >
                <button className="first-page-btn" onClick={() => paginate(firstPage)} href="!#">
                    First
                </button>
                <button className="previous-page-btn" onClick={() => paginate(currentPageNumber-1)} >
                    Previous
                </button>
                <button className="next-page-btn" onClick={() => paginate(currentPageNumber+1)} >
                    Next
                </button>
                <button className="last-page-btn" onClick={() => paginate(lastPage)} >
                    Last
                </button>
            </section>
        </div>
        
    )
}

export default Pagination
