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
      "http://hn.algolia.com/api/v1/search_by_date?query="
    );
    const data = await res.json();
    console.log(data);
    setNews(data.hits);
  };

  return (
    <div className="newsSection">
      {news.map((news) => {
        return (
          // Key muss gestzt werden, da jedes Element ein unique ID benötigt
          // ID wird von der API übernommen
          <div className="apiWrapper">
            <h2>{news.author}</h2>
            <h2>{news.story_title}</h2>
            <h2>{news.story_url}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default NewsSection;
