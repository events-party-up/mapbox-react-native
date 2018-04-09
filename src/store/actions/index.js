export const addUserRequest = userName => ({
  type: 'ADD_USER_REQUEST',
  payload: {
    userName,
  },
});

export const addUserSuccess = user => ({
  type: 'ADD_USER_SUCCESS',
  payload: {
    user,
  },
});

export const showModal = main => ({
  type: 'SHOW_MODAL',
  payload: {
    main,
  },
});

export const changeLocal = user => ({
  type: 'CHANGE_LOCAL',
  payload: {
    user,
  },
});

