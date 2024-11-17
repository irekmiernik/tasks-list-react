import { useState } from 'react';

export const useHide = () => {
  const [hideTasks, setHideTasks] = useState(false);
  const toggleHideTasks = () => setHideTasks(hideTasks => !hideTasks);

  return {
    hideTasks,
    toggleHideTasks,
  };
};