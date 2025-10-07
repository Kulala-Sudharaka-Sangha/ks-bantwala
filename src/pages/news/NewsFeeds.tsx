import { useState } from "react";
import "./NewsFeeds.scss";
import "quill/dist/quill.snow.css";
import QuillEditor from "../../components/QuillEditor/QuillEditor";

const NewsFeeds = () => {
  const [content, setContent] = useState("");

  return (
    <div className="news-editor">
      <h1>📝 News Editor</h1>
      <QuillEditor value={content} onChange={setContent} />
    </div>
  );
};

export default NewsFeeds;
