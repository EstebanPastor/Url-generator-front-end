import "./add-video.scss";

import axios from "axios";

import { TextField, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { baseURL } from "../../constants/url.constant";

const AddVideo = () => {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleClickSaveBtn = () => {
    if (title === "") {
      alert("Please enter a title");
      return;
    }
    const data = {
      title: title,
    };

    axios.post(baseURL, data).then((response) => navigate("/")).catch((error) => alert("An error occurred: " + error));
  };

  const handleClickBackBtn = () => {
    navigate("/");
  };

  return (
    <div className="add-video">
      <h1>Add a new video</h1>
      <div className="inputs">
        <TextField
          autoComplete="off"
          label="Video Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button variant="contained" onClick={handleClickSaveBtn}>
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickBackBtn}
        >
          Back to list
        </Button>
      </div>
    </div>
  );
};

export default AddVideo;
