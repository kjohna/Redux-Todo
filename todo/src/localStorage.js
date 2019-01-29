export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todoStorage');
    if(serializedState === null) {
      return undefined;   // nothing found, let reducer initialize state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;   // if error, let reducer initialize state
  }
};

export const saveState = (state) => {
  try {
    const serializedState =  JSON.stringify(state);
    localStorage.setItem('todoStorage', serializedState);
  } catch (err) {
    console.log(err);   // do something better?
  }
};