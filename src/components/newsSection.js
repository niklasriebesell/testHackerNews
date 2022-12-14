import "./newsSection.css";
import "../App.css";
import { useEffect, useState } from "react";
import Spinner from "./spinner";
import axios from "axios";

function NewsSection({ userInput }) {
  const [news, setNews] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [sideUp, setSideUp] = useState(0);
  // const [search, setSearch] = useState([]);

  // sorgt dafür, dass bei Aufraufen/refresh der Seite, die funktion feuert
  useEffect(() => {
    console.log("ich laufe");
    // if (!userInput === "") {
    getNews();
    // }
  }, [userInput, sideUp]);
  console.log("ich bin sideUp" + sideUp);

  console.log(userInput, "ich bin Userinput");
  const getNews = () => {
    axios
      .get(
        `http://hn.algolia.com/api/v1/search?query=${userInput}/&page=${sideUp}`
      )
      .then((response) => {
        console.log(response.data.hits);
        setNews(response.data.hits);
        setLoading(false);
      });
  };

  return (
    <div className="newsSection">
      {isloading ? <Spinner /> : ""}
      {news.length &&
        news.map((news) => {
          return (
            <>
            {/* // Key muss gestzt werden, da jedes Element ein unique ID benötigt
            // ID wird von der API übernommen
            // className ändern ! */}
              <div key={crypto.randomUUID()} className="newsWrapper">
                <a href={news.story_url}>
                  <p className="story">{news.title}</p>
                  <p className="infos">{news.points} points by {news.author} {news.created_at} | {news.num_comments} comments</p>
                </a>
              </div>
            </>
          );
        })}
      <button onClick={() => setSideUp(sideUp + 1)}>nächste Seite</button>
      <button disabled={sideUp < 1} onClick={() => setSideUp(sideUp - 1)}>
        vorherige Seite
      </button>
      <span>Seite: {sideUp}</span>
    </div>
  );
}

export default NewsSection;
