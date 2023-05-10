import React, { useState } from "react";

import SearchBox from "./SearchBox";
import DropdownButton from "./DropdownButton";

import { api_options } from "../constants";
import CardList from "./CardList";
import Button from "@mui/material/Button";

import axios from "axios";

const ExercisesSection = (props) => {
  const [muscle, setMuscle] = useState("");
  const [exerciseName, setExerciseName] = useState("");
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const [apiData, setApiData] = useState([{}]);

  const options = {
    method: "GET",
    url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
    params: {
      muscle: muscle === "none" ? "" : muscle,
      difficulty: level === "none" ? "" : level,
      type: type === "none" ? "" : type,
      name: exerciseName,
    },
    headers: {
      "X-RapidAPI-Key": "6f5be83ac5mshc37c3a72ee27060p1ff6dfjsnba56b9f36672",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  //API Handling
  function apiCall() {
    axios
      .request(options)
      .then(function (response) {
        setApiData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div id="exercises" className="flex flex-col mx-4 overflow-clip">
      {/* Search header group */}
      <div className="flex flex-col items-center sm:mt-2 md:flex-row sm:justify-evenly ">
        {/* Search by Name Box*/}
        <SearchBox callBack={setExerciseName} onKeyDownFunc={apiCall} />

        {/* Dropdown Selects */}

        <div>
          <DropdownButton
            title={api_options[0].title}
            results={api_options[0].results}
            key={api_options[0].id}
            callBack={setMuscle}
          />
        </div>
        <div>
          <DropdownButton
            title={api_options[1].title}
            results={api_options[1].results}
            key={api_options[1].id}
            callBack={setType}
          />
        </div>
        <div>
          <DropdownButton
            title={api_options[2].title}
            results={api_options[2].results}
            key={api_options[2].id}
            callBack={setLevel}
          />
        </div>

        <div className="mt-0 sm:mt-6">
          <Button
            variant="contained"
            className="from-pink-500 to-orange-400"
            style={{
              textTransform: "none",
              fontSize: 13,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              background:
                "linear-gradient(to bottom right, var(--tw-gradient-stops))",
              borderRadius: 20,
            }}
            onClick={apiCall}
          >
            View Exercises
          </Button>

          {/* <Button
            variant="contained"
            className="from-pink-500 to-orange-400"
            onClick={apiCall}
          >
            View Exercises
          </Button>{" "} */}
        </div>
      </div>
      {apiData.length > 1 ? (
        <CardList exercises={apiData} callBack={props.callBack} />
      ) : (
        <div className=" text-gray-500 flex items-center justify-center mt-32 mb-60">
          No results were found <br /> Try using other filter options
        </div>
      )}
    </div>
  );
};

export default ExercisesSection;
