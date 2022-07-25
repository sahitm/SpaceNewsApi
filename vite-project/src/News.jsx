import React from 'react'

function News({data}) {
    return ( <div className='article' onClick={() => {window.location.href= data.url}}>
        <hr />
        <h3>{data.title}</h3>
        <img src={data.imageUrl} alt={data.title} />
        <p>{data.summary}</p>
        <h4>{data.publishedAt}</h4>
        <hr />
    </div>  );
}

export default News;