import { useEffect, useState } from "react";
import "./NewsFeeds.scss";
import Marquee from "react-fast-marquee";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import { newsCategories } from "../../utils/news";
import { fetchNews, News } from "../../store/slices/news-slice";
import { AppDispatch, RootState } from "../../store/app-store";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

const NewsFeeds = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { newsList } = useSelector((state: RootState) => state.news);
  const loading = useSelector((state: RootState) => state.news.loading);
  const error = useSelector((state: RootState) => state.news.error);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const [mainNews, setMainNews] = useState<News | null>(null);

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    let data = newsList;

    if (selectedCategory !== "All") {
      data = data.filter((n) => n.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      data = data.filter((n) =>
        n.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredNews(data);
    setMainNews(data[0] || null);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, newsList]);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    console.log("Fetched news:", newsList);
  }, [newsList]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="news-feed">
      <div className="marquee">
        <Marquee gradient={false} speed={60}>
          {newsList.map((news) => news.title).join(" | ")}
        </Marquee>
      </div>
      <div className="content-area">
        <div className="main-news">
          {mainNews ? (
            <>
              <div
                className="main-content"
                dangerouslySetInnerHTML={{ __html: mainNews.content }}
              />
              <div className="date-time">
                {new Date()
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                  .replace(/(\d{2}) ([A-Za-z]+) (\d{4})/, "$1 $2, $3")}
              </div>
            </>
          ) : (
            <p>No news available</p>
          )}
        </div>

        <div className="side-news">
          <div className="top-bar">
            <InputBox
              id="search-input"
              name="search-input"
              type={InputTypes.Text}
              label="Search News"
              value={searchTerm}
              isRequired
              setInputValue={(value) => setSearchTerm(value)}
            />

            <div className="filters">
              {newsCategories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-pill ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="side-list">
            {paginatedNews.map((news) => (
              <div
                key={news.id}
                className="side-item"
                onClick={() => setMainNews(news)}
              >
                {(() => {
                  const match = news.content.match(
                    /<img[^>]+src=["']([^"']+)["']/i
                  );
                  const imgSrc = match
                    ? match[1]
                    : "https://placehold.co/400x250";
                  return <img src={imgSrc} alt={news.title} />;
                })()}
                <div className="side-text">
                  <h4>{news.title}</h4>
                  <div
                    className="side-content"
                    dangerouslySetInnerHTML={{
                      __html: (() => {
                        // Remove everything before and including the first image tag
                        const imgRegex = /<img[^>]*>[\s\n]*/i;
                        const parts = news.content.split(imgRegex);
                        // parts[1] will be the content after the first image
                        return parts[1] || "";
                      })(),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeeds;
