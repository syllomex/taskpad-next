/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

type State = any;
type SetState = Dispatch<SetStateAction<any>>;
type Key = string | number;

function add(item: any, state: State, setState: SetState) {
  const current = [...state];
  current.push(item);
  setState(current);
  return current;
}

function remove(key: Key, state: State, setState: SetState) {
  const index =
    typeof key === "string" ? state.findIndex((item) => item.id === key) : key;

  const current = [...state];
  current.splice(index, 1);
  setState(current);
  return current;
}

function findIndex(key: Key, array: any) {
  const index =
    typeof key === "string" ? array.findIndex((item) => item.id === key) : key;

  return index;
}

function find(key: Key, array: any) {
  const index = findIndex(key, array);
  return array[index];
}

function replace(key: Key, state: State, setState: SetState, value: any) {
  const index = findIndex(key, state);
  const cur = [...state];
  cur.splice(index, 1, value);
  setState(cur);
  return cur;
}

const arrayState = {
  add,
  remove,
  find,
  replace,
  findIndex,
};

export default arrayState;
