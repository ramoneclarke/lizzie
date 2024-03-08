<!doctype html>
<html>
  <body>
    <select id="workout">
      <option value="lower">Lower Body</option>
      <option value="upper">Upper Body</option>
      <option value="full">Full Body</option>
    </select>

    <ul id="exerciseList"></ul>

    <script>
      const lowerWorkout = [
        {
          name: "Squats",
          reps: 8,
          sets: 3,
        },
        {
          name: "Deadlifts",
          reps: 8,
          sets: 3,
        },
        {
          name: "Legpress",
          reps: 8,
          sets: 3,
        },
      ];

      const upperWorkout = [
        {
          name: "Bench Press",
          reps: 8,
          sets: 3,
        },
        {
          name: "Shoulder Press",
          reps: 8,
          sets: 3,
        },
        {
          name: "Legpress",
          reps: 8,
          sets: 3,
        },
      ];

      const fullWorkout = [
        {
          reps: 8,
          sets: 3,
        },
        {
          reps: 8,
          sets: 3,
        },
        {
          reps: 8,
          sets: 3,
        },
      ];

      document
        .getElementById("workout")
        .addEventListener("change", function () {
          let muscleGroup = this.value;
          let selectedWorkout;
          let exerciseList = document.getElementById("exerciseList");

          // Clear the list
          exerciseList.innerHTML = "";

          // Set the list with exercises based on the selected workout
          if (muscleGroup === "lower") {
            selectedWorkout = lowerWorkout;
          } else if (muscleGroup === "upper") {
            selectedWorkout = upperWorkout;
          } else if (muscleGroup === "full") {
            selectedWorkout = fullWorkout;
          }
          selectedWorkout.forEach(function (exercise) {
            let li = document.createElement("li");
            li.textContent = `${exercise.name} - ${exercise.reps} x ${exercise.sets}`;
            exerciseList.appendChild(li);
          });
        });
    </script>
  </body>
</html>
