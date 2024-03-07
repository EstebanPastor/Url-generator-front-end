import "./edit-video.scss";

import axios from "axios";

import { TextField, Button } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { baseURL } from "../../constants/url.constant";
import { IVideo } from "../../types/global.types";

const EditVideo = () => {
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { videoId } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get<IVideo>(`${baseURL}/${videoId}`)
      .then((response) => {
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => alert("An error occurred"));
  }, []);

  const handleClickSaveBtn = () => {
    if (title === "") {
      alert("Please enter a title");
      return;
    }
    const data = {
      title: title,
    };

    axios
      .patch(`${baseURL}/${videoId}`, data)
      .then((response) => navigate("/"))
      .catch((error) => alert("An error occurred: " + error));
  };

  const handleClickBackBtn = () => {
    navigate("/");
  };

  return (
    <div className="edit-video">
      <h1>Edit video</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
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
      )}
    </div>
  );
};

export default EditVideo;
