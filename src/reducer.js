export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after finished developing
  //token: 'BQDteNehz46xNMgHdXLetcKlPw1vhdsBQfXfqtxiMl6Ce4TgE0QkpM-VYCN0EiOA_EWiRtDh6kyeB9N4KhnvbHiSjl6rkLOZr2XLbaJ8EE3_yJrWAkB5M0SKUecZFbSIz6mYBBH7zOjBlAF2zvguDTfs4171mWFZWNUUkjTmHiSHLE7-ZbuA',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
