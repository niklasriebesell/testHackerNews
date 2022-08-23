import "./newsSection.css";
import { useEffect, useState } from "react";

function NewsSection() {
  const [news, setNews] = useState([]);

  // sorgt dafür, dass bei Aufraufen/refresh der Seite, die funktion getCharacter feuert
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const res = await fetch(
      "http://hn.algolia.com/api/v1/search_by_date?query=30"
    );
    const data = await res.json();
    console.log(data);
    setNews(data.hits);
  };

  return (
    <div className="newsSection">
      {news.length &&
        news.map((news) => {
          return (
            // Key muss gestzt werden, da jedes Element ein unique ID benötigt
            // ID wird von der API übernommen
            // className ändern !
            <div key={news.story_id} className="apiWrapper">
              <p className="story">{news.story_title}</p>
              <p className="storyUrl">{news.story_url}</p>
              <br />
              <p className="points">30 points by</p>
              <p className="author">{news.author}</p>
              <p className="date">{news.created_at}</p>
              <a className="hide" href="{#}">
                hide
              </a>
              <p className="comments">{news.num_comments}</p>
            </div>
          );
        })}
    </div>
  );
}

export default NewsSection;
