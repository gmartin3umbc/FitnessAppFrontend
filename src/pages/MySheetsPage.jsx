import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WorkoutList from "../components/WorkoutList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EastIcon from "@mui/icons-material/East";

import axios from "axios";
import { Button } from "@mui/material";

const MySheetsPage = () => {
  const [workouts, setWorkouts] = useState([{}]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const url = "http://localhost:8000/myworkouts";
        const response = await axios.get(url);
        setWorkouts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Navbar />

      <div className="flex flex-col w-full items-center">
        <h4 className="text-4xl mt-1 font-bold leading-tight text-gray-800 dark:text-gray-100">
          My Workouts
        </h4>

        <Link to="/createWorkoutSheet" className="mt-4">
          {/* <button class="inline-flex mt-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Create New Workout
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://localhost:5173/sheets"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button> */}
          <Button
            variant="contained"
            className="from-pink-500 to-orange-400"
            size="medium"
            endIcon={<EastIcon />}
            style={{
              textTransform: "none",
              fontSize: 20,
              minWidth: 100,
              background:
                "linear-gradient(to bottom right, var(--tw-gradient-stops))",
              borderRadius: 20,
            }}
          >
            Create New Workout
          </Button>
        </Link>
      </div>

      {/* <div className="flex justify-center items-center"> */}
      <WorkoutList workouts={workouts} />
      {/* </div> */}

      <Footer />
    </div>
  );
};

export default MySheetsPage;
