import { useState, useEffect } from "react";
import React from "react";
import Avatar from "@mui/material/Avatar";
import ProfAvatar from "../assets/profile-avatar.jpg";
import { Button } from "@mui/material";
import axios from "axios";

interface TruncatedTextProps {
  text: string;
  maxLines?: number;
}

type MyFunc = () => void;

interface Job {
  id: number;
  job_title: string;
  job_category: string;
  despription: string;
}

interface CardProps {
  image: string;
  handleDecline: MyFunc;
  handleAccept: MyFunc;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLines }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div
        className={`text-sm font-normal ${
          showMore ? "" : "line-clamp line-clamp-" + maxLines
        }`}
      >
        {text}
      </div>
      {!showMore && (
        <span
          className="text-blue-500 text-xs cursor-pointer"
          onClick={toggleShowMore}
        >
          See more
        </span>
      )}
      {showMore && (
        <span
          className="text-blue-500 text-xs cursor-pointer"
          onClick={toggleShowMore}
        >
          See less
        </span>
      )}
    </div>
  );
};

const FeedCard: React.FC<CardProps> = ({
  image,
  handleAccept,
  handleDecline,
}) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/jobs/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setJobs(result.data);
      console.log(result.data);
    } catch (e) {
      console.error("Error loading jobs:", e);
    }
  }

  return (
    <div className=" columns-1">
      {jobs.map((job) => (
        <div
          key={job.id}
          className=" w-full bg-gray-200 rounded p-3 flex flex-col mb-4 columns-3 "
        >
          <div className="flex flex-row">
            <Avatar alt="Remy Sharp" src={ProfAvatar} />
            <div className="flex flex-col ml-3">
              <p className="text-xl font-medium">{job.job_title}</p>
              <p className="font-sans text-sm font-normal">
                {job.job_category}
              </p>
            </div>
            <p className="text-xs font-normal ml-auto pt-1">
              21 Jan 2024 07.28 PM
            </p>
          </div>
          <TruncatedText text={job.despription} maxLines={2} />
          <div className="flayer">
            <img src={image} alt="banner1" />
          </div>
          <div
            className="btn-bottom"
            style={{
              display: "flex",
              gap: "3px",
              marginTop: "auto",
              paddingTop: "8px",
            }}
          >
            <Button
              style={{
                flex: "70%",
                marginRight: "3px",
                textTransform: "none",
                fontSize: "0.8rem",
              }}
              variant="outlined"
              size="small"
              onClick={handleAccept}
            >
              Apply now
            </Button>
            <Button
              style={{
                flex: "30%",
                textTransform: "none",
                fontSize: "0.8rem",
              }}
              variant="outlined"
              size="small"
              onClick={handleDecline}
            >
              Decline
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedCard;
