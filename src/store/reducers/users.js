const initialState = [
  {
    id: 4214023,
    name: 'Felipe Carvalho',
    bio: 'UI Designer and Developer',
    avatar_url: 'https://avatars2.githubusercontent.com/u/4214023?v=4',
    html_url: 'https://github.com/felipecarvalho',
    lng: -46.6633287,
    lat: -23.5542256,
  },
];

export default function Users(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER_SUCCESS':
      return [...state, action.payload.user];
    default:
      return state;
  }
}
