import WorkoutCard from "./WorkoutCard";

const WorkoutList = (props) => {
  const workouts = props.workouts;
  const workouts_test = [
    {
      id: 1,
      name: "Push Workout",
      description: "this is a short description of the workout",
    },
    {
      id: 2,
      name: "Pull Workout",
      description: "this is another short description",
    },
    {
      id: 2,
      name: "Pull Workout",
      description: "this is another short description",
    },
    {
      id: 3,
      name: "Legs Workout",
      description: "this is another short description",
    },
    {
      id: 4,
      name: "Chest/Back Workout",
      description: "this is another short description",
    },
    {
      id: 5,
      name: "Arms Workout",
      description: "this is another short description",
    },
    {
      id: 6,
      name: "Legs 2 Workout",
      description: "this is another short description",
    },
  ];

  return (
    <div className="flex h-full mt-5 justify-center w-full flex-wrap">
      {workouts.map((workouts) => (
        <WorkoutCard workouts={workouts} />
      ))}
    </div>
  );
};

export default WorkoutList;
