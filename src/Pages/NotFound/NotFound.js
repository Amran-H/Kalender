import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const NotFound = () => {
  return (
    <div className="mx-auto">
      <img
        className="mx-auto"
        src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX22636839.jpg"
        alt=""
      />
      <div className="flex justify-center">
        <Link to="/">
          <Button> Go TO Home Page </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
