import React, { useState, useEffect } from "react";
import axios from "axios";

const SheetExerciseCard = (props) => {
  const [apiData, setApiData] = useState([{}]);

  const options = {
    method: "GET",
    url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
    params: {
      name: props.exercise.exercise,
    },
    headers: {
      "X-RapidAPI-Key": "6f5be83ac5mshc37c3a72ee27060p1ff6dfjsnba56b9f36672",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  useEffect(() => {
    function apiCall() {
      axios
        .request(options)
        .then(function (response) {
          setApiData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    apiCall();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col rounded-lg my-4  h-fit min-w-[25rem] w-fit shadow-lg">
      <article>
        <div className="flex items-center justify-between leading-tight p-2 md:p-4">
          <text className="text-lg no-underline">
            {props.exercise.exercise}
          </text>
        </div>
        <div class="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="text-grey-darker text-sm">
            Level: {apiData[0].difficulty}
          </p>
        </div>
        <div class="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="text-grey-darker text-sm">Type: {apiData[0].type}</p>
        </div>
        <div class="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="text-grey-darker text-sm">
            Weight: {props.exercise.sets}
          </p>
        </div>
        <div class="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="text-grey-darker text-sm">
            Reps: {props.exercise.reps}
          </p>
        </div>
      </article>
    </div>
  );
};

export default SheetExerciseCard;
