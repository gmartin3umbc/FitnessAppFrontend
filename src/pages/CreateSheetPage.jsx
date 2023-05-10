import React from "react";
import ExercisesSection from "../components/ExercisesSection";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateSheetPage = () => {
  const [exercises, setExercises] = useState([]);
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const navigate = useNavigate();

  function addExercises(exercise) {
    if (!exercises.includes(exercise))
      setExercises((oldArray) => [...oldArray, exercise]);
  }

  function deleteExercise(value) {
    setExercises(exercises.filter((item) => item !== value));
    // setExercises((oldValues) => {
    //   return oldValues.filter((exercise) => exercise !== value);
    // });
  }

  const handleChangeTitle = (e) => {
    setWorkoutTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setWorkoutDescription(e.target.value);
  };

  const saveWorkout = async () => {
    const workoutInfo = {
      name: workoutTitle,
      description: workoutDescription,
    };

    const exercises_arr = exercises.map(function (exercise) {
      let json = {
        workout_name: workoutTitle,
        exercise: exercise,
        reps: 10,
        sets: 3,
      };
      return json;
    });

    try {
      // first create the workout in the database
      await axios.post("http://127.0.0.1:8000/myworkouts", workoutInfo);
      await axios.post(
        "http://127.0.0.1:8000/myworkouts/exercises",
        exercises_arr
      );
      // console.log(exercises_arr);
    } catch (err) {
      console.log(err);
    }

    navigate("/sheets");
  };

  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* leftSide */}

        <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black flex flex-[30%] flex-col text-white rounded-3xl m-3">
          <label
            for="helper-text"
            class="mt-3 flex justify-center font-medium text-2xl"
          >
            Name Your Workout
          </label>
          <input
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 mt-2 border self-center border-gray-300 text-gray-900 text-sm rounded-lg block w-[80%] p-2.5  "
            placeholder='e.g. "Monday Workout" '
            onChange={handleChangeTitle}
          />

          <label
            for="helper-text"
            class="mt-3 flex justify-center font-light text-sm"
          >
            Give your workout a brief description
          </label>
          <input
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 mt-2 border self-center border-gray-300 text-gray-900 text-sm rounded-lg block w-[80%] p-2.5  "
            placeholder='e.g. "Chest focused workout" '
            onChange={handleChangeDescription}
          />

          <div className=" mt-6 flex justify-start ml-2 font-medium">
            Exercises Chosen
          </div>

          {exercises.length <= 0 ? (
            <div className="flex font-light text-gray-400 mt-16 justify-center">
              No Exercises Chosen Yet
            </div>
          ) : (
            <ul class=" divide-y divide-gray-200 mt-5">
              {exercises.map((exercise) => (
                <li>
                  <div class="flex items-center mx-4">
                    <div class="flex-shrink-0"></div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium truncate text-white">
                        {exercise}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-white">
                      <IconButton onClick={() => deleteExercise(exercise)}>
                        <DeleteIcon className=" text-white" />
                      </IconButton>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 justify-center flex mb-8 md:mb-0">
            <Button
              variant="contained"
              disabled={
                exercises.length <= 0 ||
                workoutTitle.localeCompare("") == 0 ||
                workoutDescription.localeCompare("") == 0
                  ? true
                  : false
              }
              className="from-pink-500 to-orange-400 "
              style={{
                textTransform: "none",
                fontSize: 15,
                minWidth: 10,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                background:
                  "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                borderRadius: 20,
              }}
              onClick={saveWorkout}
            >
              Save Workout
            </Button>
          </div>
        </div>

        {/* rightSide */}
        <div className=" flex flex-[95%] mt-3 flex-col">
          <div className="text-[#121619] flex flex-row justify-center items-center font-medium text-xl">
            Select your exercises
          </div>
          <ExercisesSection callBack={addExercises} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateSheetPage;
