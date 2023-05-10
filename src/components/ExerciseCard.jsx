import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";

import { IconButton } from "@mui/material";

const ExerciseCard = (props) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-2xl">
        {/* <a href="#">
          <img
            alt="Placeholder"
            class="block h-auto w-full"
            src="https://picsum.photos/600/400/?random"
          />
        </a> */}

        <div className="flex items-center justify-between leading-tight p-2 md:p-4">
          <text className="text-lg no-underline hover:underline">
            {props.exercise.name}
          </text>
          {props.callBack != null ? (
            <IconButton onClick={() => props.callBack(props.exercise.name)}>
              <AddCircleIcon className=" text-slate-400" />
            </IconButton>
          ) : (
            <div />
          )}
        </div>
        <div class="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="text-grey-darker text-sm">
            Level: {props.exercise.difficulty}
          </p>
          <p className="text-grey-darker text-sm">
            Type: {props.exercise.type}
          </p>
        </div>
      </article>
    </div>
  );
};

export default ExerciseCard;
