import ExerciseCard from "./ExerciseCard";

const CardList = (props) => {
  const exercises = props.exercises;

  // const exercises_test = [
  //   {
  //     id: 1,
  //     name: "test exercise",
  //     level: "expert",
  //     type: "cardio",
  //   },
  //   {
  //     id: 2,
  //     name: "test 2 exercise",
  //     level: "expert 2",
  //     type: "cardio 2",
  //   },
  // ];

  return (
    <div className="flex flex-wrap justify-start">
      {exercises.map((exercise) => (
        <ExerciseCard exercise={exercise} callBack={props.callBack} />
      ))}
    </div>
  );
};

export default CardList;
