import "./home.scss";

import { useState, useEffect } from "react";

import { AddCircle, Edit, Delete } from "@mui/icons-material";
import { IVideo } from "../../types/global.types";
import axios from "axios";
import { baseURL } from "../../constants/url.constant";
import moment from "moment";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirectToEdit = (videoId: string) => {
    navigate(`/edit-video/${videoId}`);
  };

  const redirectToDelete = (videoId: string) => {
    navigate(`/delete-video/${videoId}`);
  };

  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    axios
      .get<IVideo[]>(baseURL)
      .then((response) => setVideos(response.data))
      .catch((error) => alert(JSON.stringify(error)));
  }, []);

  return (
    <div className="home">
      <div className="heading">
        <h1>Video list</h1>
        <span>
          <AddCircle onClick={() => navigate("/add-video")} />
        </span>
      </div>
      <div className="cards">
        {videos.length === 0 && <h1 className="no-video">No videos available</h1> }
        {videos.map((item) => (
          <div key={item.id} className="card">
            <div className="left">
              <div className="title">
                <span>{item.title}</span>
                <span className="time">{moment(item.createdAt).fromNow()}</span>
              </div>

              <div className="url">
                <span>{item.url}</span>
              </div>
            </div>
            <div className="right">
              <div className="btns">
                <Edit className="edit-btn" onClick={() => redirectToEdit(item.id)} />
                <Delete className="delete-btn" onClick={() => redirectToDelete(item.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
