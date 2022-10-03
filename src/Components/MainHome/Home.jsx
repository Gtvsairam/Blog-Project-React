import React from "react";
import LatestArticles from "./ArticleBox/LatestArticles";
import LatestPost from "./LatestBox/LatestPost";
import Picture from "./Pictures/Picture";
import Data from "../../Pages/Details";
import SideArticle from "./ArticleBox/SideArticle";
import LatestStories from "./LatestBox/LatestStories";


const Home = (props) => {
  console.log(Data);
  return (
    <>
      <Picture />
        <p className="latestText">The Latest</p>
        <hr style={{ width: '12%', marginLeft: '70px', height: '1px', backgroundColor: 'grey' }} />

      <div className="contentBox">
        {Data.filter((contentData) => {
          return contentData.category === "Latest"
        }).map((ele) => {
          return (
            <LatestPost
              key={ele.id}
              img={ele.imgUrl}
              title={ele.title}
              content={ele.content.slice(0, 100)}
              fullcontent={ele.fullcontent}
            />
          )
        })}
      </div>
      <div className="latestArticleBox">
        <div className="leftBox">
          <p className="latestArticleText">The Latest Article</p>
          <hr style={{ width: '27%', marginLeft: '20px', height: '1px', backgroundColor: 'grey' }} />
          {Data.filter((contentData) => {
            return contentData.category === "LatestArticle"
          }).map((ele) => {
            return (
              <LatestArticles
                key={ele.id}
                img={ele.imgUrl}
                title={ele.title}
                content={ele.content.slice(0, 200)}
                fullcontent={ele.fullcontent}
                
              />
            )
          })}
        </div>
        <div className="rightBox">
          <p className="postText">Top Post</p>
          <hr style={{ width: '30%', marginLeft: '10px', height: '1px', backgroundColor: 'grey' }} />
          {Data.filter((contentData) => {
            return contentData.category === "LatestArticle"
          }).map((ele) => {
            return (
              <SideArticle
                key={ele.id}
                img={ele.imgUrl}
                title={ele.title}
                content={ele.content.slice(0, 100)}
                fullcontent={ele.fullcontent}
              />
            )
          })}

        </div>
      </div>
      {/* //////////////////////////// */}
        <p className="latestStoriesText">Latest Stories</p>
        <hr style={{ width: '15%', marginLeft: '18px', height: '1px', backgroundColor: 'grey' }} />
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
              fullcontent={ele.fullcontent}
            />
          )
        })}
      </div>
    </>
  );
};

export default Home;
