import { GET_POSTS } from '../action/types';

const initialState = {
  postData: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        postData: payload,
      };

    default:
      return state;
  }
}
