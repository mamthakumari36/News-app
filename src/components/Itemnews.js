import React from 'react'

const Itemnews = (props) => {
   
        let { title, description, imgUrl, newsUrl, author, date, source } = props
        return (
            <div className='container my-3'>

                <div className="card" style={{ width: "18rem" }}>
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "50%" }}>
                        {source}
                    </span>
                    <img src={!imgUrl ? "https://images.wsj.net/im-902385/social" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {author}, updated on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Learn more</a>
                    </div>
                </div>
            </div>
        )
}

export default Itemnews
