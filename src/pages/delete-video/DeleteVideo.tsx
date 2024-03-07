import "./delete-video.scss";

import axios from "axios";

import { TextField, Button } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { baseURL } from "../../constants/url.constant";
import { IVideo } from "../../types/global.types";

const DeleteVideo = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { videoId } = useParams();

  const handleClickDeleteBtn = () => {
    setLoading(true);

    axios
      .delete(`${baseURL}/${videoId}`)
      .then((response) => navigate("/"))
      .catch((error) => alert("An error occurred: " + error));
  };

  const handleClickBackBtn = () => {
    navigate("/");
  };

  return (
    <div className="delete-video">
      <h1>Delete video</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="inputs">
          <h3>Are you sure to delete the video?</h3>
          <Button variant="contained" 
          color="warning"
          onClick={handleClickDeleteBtn}>
            Delete
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

export default DeleteVideo;
