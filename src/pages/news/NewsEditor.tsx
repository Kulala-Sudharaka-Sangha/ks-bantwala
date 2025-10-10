import { useState } from "react";
import "./NewsEditor.scss";
import "quill/dist/quill.snow.css";
import QuillEditor from "../../components/QuillEditor/QuillEditor";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";

const categories = [
  "ದೇಶ", // Nation
  "ರಾಜಕೀಯ", // Politics
  "ಆರೋಗ್ಯ", // Health
  "ಶಿಕ್ಷಣ", // Education
  "ಮನರಂಜನೆ", // Entertainment
  "ಕ್ರೀಡೆ", // Sports
  "ಸಂಸ್ಕೃತಿ", // Culture
  "ವಿಜ್ಞಾನ", // Science
  "ಧರ್ಮ", // Religion
];

const NewsEditor = () => {
  const [content, setContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);

  return (
    <>
      {!showPreview ? (
        <div key="editor" className="news-editor">
          <h1>News Editor</h1>
          <InputBox
            id="title"
            name="title"
            type={InputTypes.Text}
            label="News Title"
            value={title}
            isRequired
            setInputValue={(value) => setTitle(value)}
          />
          <InputBox
            id="news-category"
            name="news-category"
            type={InputTypes.DropDown}
            label="News Category"
            options={categories.map((cat) => ({ id: cat, title: cat }))}
            value={category}
            isRequired
            setInputValue={(value) => setCategory(value)}
          />
          <QuillEditor value={content} onChange={setContent} />
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
            <button className="btn" onClick={() => console.log(content)}>
              SUBMIT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsEditor;
