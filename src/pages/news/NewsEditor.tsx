import { useState } from "react";
import "./NewsEditor.scss";
import "quill/dist/quill.snow.css";
import QuillEditor from "../../components/QuillEditor/QuillEditor";

const NewsEditor = () => {
  const [content, setContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {!showPreview ? (
        <div key="editor" className="news-editor">
          <h1>News Editor</h1>
          <QuillEditor
            value={content}
            onChange={() => {
              setContent(content);
              console.log(content);
            }}
          />
          <button
            className="btn"
            onClick={() => setShowPreview((prev) => !prev)}
          >
            PREVIEW
          </button>
        </div>
      ) : (
        <div className="news-preview-container">
          <h1>News Preview</h1>
          <div className="news-preview">
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div className="date-time">
              {new Date()
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
                .replace(/(\d{2}) ([A-Za-z]+) (\d{4})/, "$1 $2, $3")}
            </div>
          </div>
          <div className="preview-control">
            <button
              className="btn"
              onClick={() => setShowPreview((prev) => !prev)}
            >
              EDIT
            </button>
            <button className="btn" onClick={() => alert("Submitted!")}>
              SUBMIT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsEditor;
