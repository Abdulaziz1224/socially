import React from 'react'

function BlogCard({img,text,date}) {
    return (
        <div className="card">
            <img src={img} alt="blog image" />
            <div className="textAndDate">
                <h2 className="text">{text}</h2>
                <p className="date">{date}</p>
            </div>
        </div>
    )
}

export default BlogCard
