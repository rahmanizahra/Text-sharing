import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
function ShowText() {
  const { id } = useParams();
  const [sharedText, setSharedText] = useState("");
  useEffect(() => {
    const fetchText = async () => {
      const response = await fetch(`http://localhost:3001/text/${id}`);
      console.log(response);
      const text = await response.text();
      console.log(text);
      console.log(response.ok);
      if (response.ok) {
        setSharedText(text);
      }
    };
    fetchText();
  }, [id]);

  return (
    <div style={{ marginTop: "30vh" }}>
      <Card
        style={{
          width: "28rem",
          padding: "2rem",
          margin: "auto",
          backgroundColor: "	#F0F0F0",
        }}
      >
        <div style={{ margin: "0.5rem" }}>{sharedText}</div>
      </Card>
    </div>
  );
}

export default ShowText;
