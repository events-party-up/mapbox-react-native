const initialState = {
  modalVisible: false,
  location: {
    lng: -46.6633287,
    lat: -23.5542256,
  },
};

export default function Main(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { ...state, modalVisible: action.payload.main };
    case 'CHANGE_LOCAL':
      return { ...state, location: action.payload.user };
    default:
      return state;
  }
}
