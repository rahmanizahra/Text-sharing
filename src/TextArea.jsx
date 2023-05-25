import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function TextArea({ url, text, setUrl, setText }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleUrl(event) {
    setUrl(event.target.value);
  }

  function handleText(event) {
    setText(event.target.value);
  }

  function handlePost(e) {
    e.preventDefault();
    fetch("http://localhost:3001/text/addtext", {
      method: "POST",
      body: JSON.stringify({
        id: url,
        text: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsClicked(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div style={{ marginTop: "30vh" }}>
      <Card
        style={{
          width: "28rem",
          padding: "2rem",
          margin: "auto",
          backgroundColor: "#F0F0F0",
        }}
      >
        {!isClicked && (
          <>
            <label htmlFor="url">URL :</label>
            <input
              onChange={handleUrl}
              value={url}
              id="url"
              style={{ margin: "0.5rem" }}
            />
            <label htmlFor="url">Enter your text :</label>
            <textarea
              style={{ margin: "0.5rem" }}
              onChange={handleText}
              value={text}
            ></textarea>
            <Button
              variant="primary"
              style={{ margin: "0.5rem" }}
              onClick={handlePost}
            >
              Create
            </Button>
          </>
        )}
        {isClicked && (
          <>
            <p>Your text is successfully created</p>
            <p>You can see the text in this url :</p>
            <p>{`localhost:3000/${url}`}</p>
          </>
        )}
      </Card>
    </div>
  );
}

export default TextArea;
