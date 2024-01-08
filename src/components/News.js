import React, { useEffect, useState } from 'react'
import Itemnews from './Itemnews'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }


  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3a4152b5a0d6455aa88d67adf11e90b7&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url)
    props.setProgress(40)
    let response = await data.json()
    //console.log(response);
    setArticles(response.articles)
    setTotalResults(response.totalResults)
    props.setProgress(100)
  }

  useEffect(() => {
     document.title = `${capital(props.category)} - Daily News`
    updateNews();
    //eslint-disable-next-line 
  },[])

/*
  const previousClick = async () => {
    setPage(page - 1)
    updateNews()
  }
  const nextClick = async () => {
    setPage(page + 1)
    updateNews()
  }
*/
  const fetchMoreData = async () => {
   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3a4152b5a0d6455aa88d67adf11e90b7&page=${page+1}&pageSize=${props.pagesize}`;
    setPage(page + 1)
    let data = await fetch(url)
    let response = await data.json()
    //console.log(response);
    setArticles(articles.concat(response.articles))
    setTotalResults(response.totalResults)
    
  };


  return (
    <>
      <h1 className='text-center' style={{ margin: '50px 0px', marginTop:'60px' }}>Daily News -  Top headlines from {capital(props.category)}</h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4 className='text-center' style={{ margin: '40px 30px' }}>Loading...</h4>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Itemnews title={element.title ? element.title.slice(0, 88) : ""} description={element.description ? element.description.slice(0, 50) : ""}
                  imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  )
}

News.defaultProps = {
  country: 'in',
  pagesize: 9,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}

export default News