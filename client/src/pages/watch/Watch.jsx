import React from "react";
import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  // const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      {/* <video className="video" autoPlay progress controls src="https://www.youtube.com/embed/RQApcf6IAKY?si=Wre32zyYEBDvdWmY"/> */}
      {/* <iframe className="video" src="https://www.youtube.com/embed/RQApcf6IAKY?si=Wre32zyYEBDvdWmY" autoPlay progress controls /> */}
      <video className="video" autoPlay progress controls src={""} />
    </div>
  );
};

export default Watch;
