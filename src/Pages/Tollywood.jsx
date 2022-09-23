import React from 'react'
import LatestArticles from '../Components/MainHome/ArticleBox/LatestArticles'
import Data from './Details'
import SideArticle from '../Components/MainHome/ArticleBox/SideArticle'
import LatestStories from '../Components/MainHome/LatestBox/LatestStories'

const Tollywood = () => {
  return (
    <div>
      <div className="latestArticleBox">
        <div className="leftBox">
          <p className="latestArticleText">The Latest Article</p>
          <hr style={{ width: '20%', marginLeft: '20px', height: '1px', backgroundColor: 'grey' }} />
          {Data.filter((contentData) => {
            return contentData.category === "Tollywood"
          }).map((ele) => {
            return (
              <LatestArticles
                key={ele.id}
                img={ele.imgUrl}
                title={ele.title}
                content={ele.content.slice(0, 200)}
              />
            )
          })}
        </div>
        <div className="rightBox">
          <p className="postText">Top Post</p>
          <hr style={{ width: '30%', marginLeft: '10px', height: '1px', backgroundColor: 'grey' }} />
          {Data.filter((contentData) => {
            return contentData.category === "Tollywood"
          }).map((ele) => {
            return (
              <SideArticle
                key={ele.id}
                img={ele.imgUrl}
                title={ele.title}
                content={ele.content.slice(0, 100)}
              />
            )
          })}

        </div>
      </div>
      <p className="latestStoriesText">Latest Stories</p>
        <hr style={{ width: '20%', marginLeft: '20px', height: '1px', backgroundColor: 'grey' }} />
      <div className="Lateststories">
        {Data.filter((contentData) => {
          return contentData.category === "LatestStories"
        }).map((ele) => {
          return (
            <LatestStories
              key={ele.id}
              img={ele.imgUrl}
              title={ele.title}
              content={ele.content.slice(0, 100)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Tollywood;