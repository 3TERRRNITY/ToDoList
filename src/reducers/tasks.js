import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from "../constants";

const TASKS = [
  {
    id: 1,
    text: "Бегит",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Анжумания",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Пресс качат",
    isCompleted: false,
  },
];
const tasks = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id,
          text,
          isCompleted,
        },
      ];
    case REMOVE_TASK:
      return [...state].filter((task) => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    default:
      return state;
  }
};

export default tasks;
