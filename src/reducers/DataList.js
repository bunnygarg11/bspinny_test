let initialState = {
  data: [],
  isData: true,
};
const DataList = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'MOVIE_LIST':
      return {
        ...state,
        data: payload.result ? [...state.data, ...payload.result] : [],
        isData: payload.isData,
      }
  
    default:
      return state;
  }
};

export default DataList;
