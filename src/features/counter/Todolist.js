import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, removetodo, state } from "./counterSlice";

function Todolist() {
  const data = useSelector(state);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div className="w-100 h100">
      <div class="row justify-content-center align-items-center">
        <div className="col-8 my-5">
          <input
            type="text"
            class="form-control border-5 fs-1 w-100 text-center"
            aria-describedby="helpId"
            placeholder="Create todolist"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                dispatch(addtodo(e.target.value));
                e.target.value = "";
              }
            }}
          />
        </div>
        {data.todo.length ? (
          data.todo.map((val, index) => {
            return (
              <div className="col-8 m-3">
                <div className="form-control border-5 fs-1 w-100 text-center">
                  <div className="row  justify-content-center align-items-center">
                    <div className="col-11 p-0">{val}</div>
                    <div
                    role="button"
                      className="col-1 p-0 fs-5 py-3"
                      onClick={() => {
                        dispatch(removetodo(index));
                      }}
                    >
                      X
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-8 mt-5">
            <div className="form-control border-5 fs-1 w-100 text-center">
              todo is not data you can Create todolist
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todolist;
