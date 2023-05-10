import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const WorkoutCard = (props) => {
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete("http://127.0.0.1:8000/myworkouts/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="max-w-sm h-fit p-6 m-2 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <Link to="/myWorkout" state={{ data: props.workouts }}>
        <h5 class="mb-2 text-2xl hover:text-blue-700 font-bold tracking-tight text-gray-900 dark:text-white">
          {props.workouts.name}
        </h5>
      </Link>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.workouts.description}
      </p>

      {/* <div class="inline-flex mx-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <text className="mx-1">Update Workout</text>
        <EditIcon fontSize="small" />
      </div> */}
      <div className="flex flex-row space-x-3">
        <button
          class="flex flex-row items-center px-3 py-2 text-sm 
      font-medium text-center text-white bg-blue-700 rounded-lg 
      hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link to="/editWorkoutSheet" state={{ data: props.workouts }}>
            <text className="mx-1">Edit Workout</text>
            <EditIcon fontSize="small" />
          </Link>
        </button>
        <button
          class="inline-flex items-center px-3 py-2 text-sm 
      font-medium text-center text-white bg-blue-700 rounded-lg 
      hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handleDelete(props.workouts.id)}
        >
          <text className="mx-1">Delete Workout</text>
          <DeleteForeverIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
