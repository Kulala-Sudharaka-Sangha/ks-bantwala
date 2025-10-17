import { useState } from "react";
import "./NewsEditor.scss";
import "quill/dist/quill.snow.css";
import QuillEditor from "../../components/QuillEditor/QuillEditor";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import { newsCategories } from "../../utils/news";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const NewsEditor = () => {
  const [content, setContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(newsCategories[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);

    const missing: string[] = [];
    if (!title.trim()) missing.push("Title");
    if (!category) missing.push("Category");
    if (!content || content === "<p><br></p>") missing.push("Content");
    if (missing.length) {
      setError(`${missing.join(", ")} required.`);
      return;
    }
    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "news"), {
        title: title.trim(),
        category,
        content,
        createdAt: serverTimestamp(),
        // add other fields as needed (author, status, etc.)
      });
      setSuccess("News saved.");
      // optional: clear fields
      setTitle("");
      setCategory(newsCategories[0]);
      setContent("");
      setShowPreview(false);
      console.log("News created with id:", docRef.id);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to save news.");
    } finally {
      setLoading(false);
    }
  };

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
            options={newsCategories.map((cat) => ({ id: cat, title: cat }))}
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
            <button className="btn" onClick={handleSubmit} disabled={loading}>
              SUBMIT
            </button>
          </div>
          {error && <div className="form-error">{error}</div>}
          {success && <div className="form-success">{success}</div>}
        </div>
      )}
    </>
  );
};

export default NewsEditor;
