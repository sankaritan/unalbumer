// action name definition
export const Actions = {
  CHANGE_TITLE: "CHANGE_TITLE",
  INCREMENT_REQUESTED: "counter/INCREMENT_REQUESTED",
  INCREMENT: "counter/INCREMENT",
  DECREMENT_REQUESTED: "counter/DECREMENT_REQUESTED",
  DECREMENT: "counter/DECREMENT"
};

// standard action creator returning object
export const changeTitleAction = () => ({
  type: Actions.CHANGE_TITLE
});

// thunk action creator returning function (dispatching the action)
export const increment = () => {
  return dispatch => {
    dispatch({
      type: Actions.INCREMENT_REQUESTED
    });

    dispatch({
      type: Actions.INCREMENT
    });
  };
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: Actions.INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: Actions.INCREMENT
      });
    }, 3000);
  };
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: Actions.DECREMENT_REQUESTED
    });

    dispatch({
      type: Actions.DECREMENT
    });
  };
};

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: Actions.DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: Actions.DECREMENT
      });
    }, 3000);
  };
};
