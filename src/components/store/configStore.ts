import {Action, applyMiddleware, createStore, Dispatch, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import {TodoItem} from "../model/TodoItem";
import {initStoreAction} from "../actions/actions";
import {rootReducer} from "../reducers/rootReducer";
import {IInitStoreAction} from "../actions/actionTypes";

export interface IState {
  todos: TodoItem[];
}

export const initStore = () => {
  return (dispatch: Dispatch<Action>): IInitStoreAction => {
    const todos: TodoItem[] = [{
      key: 0,
      id: 0,
      name: "Create a template for react and typescript.",
      isCompleted: true,
    }, {
      key: 1,
      id: 1,
      name: "Wire up redux to the template.",
      isCompleted: false,
    }];
    return dispatch(initStoreAction(todos));
  };
};

export const configureStore = (): Store => {
  // if (process.env.NODE_ENV === "production") {
  //     return createStore(
  //         rootReducer,
  //         applyMiddleware(thunk),
  //     );
  // } else {
  //     return createStore(
  //         rootReducer,
  //         composeWithDevTools(
  //             applyMiddleware(thunk),
  //         ),
  //     );
  // }
  return createStore(
      rootReducer,
      composeWithDevTools(
          applyMiddleware(thunk),
      ),
  );
};
