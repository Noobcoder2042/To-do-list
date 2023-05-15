import React, { useState } from "react";

function Todo() {
  const [Todolist, setTodolist] = useState("");
  const [Datalist, setDatalist] = useState([]);
  function addTodo() {
    setDatalist((Datalist) => {
      const updateList = [Todolist, ...Datalist];
      console.log(updateList);
      setTodolist("");
      return updateList;
    });
  }
  // this function remove task by getting i as id
  function removeData(i) {
    const updateListData = Datalist.filter((e, id) => {
      return i != id;
    });
    setDatalist(updateListData);
  }
  // this function remove all task
  function removeAll() {
    setDatalist([]);
  }

  return (
    <>
      <h1> TO-DO LIST 📝</h1>
      <h4>Add Your List Here ✌</h4>
      <input
        type="text"
        placeholder="✍ Enter Your Task"
        value={Todolist}
        onChange={(e) => {
          setTodolist(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>

      <br />

      {Datalist != [] &&
        Datalist.map((e, i) => {
          return (
            <>
              <div key={i}>
                <span className="item-div">{e}</span>
                <button onClick={() => removeData(i)}>❌</button>
              </div>
            </>
          );
        })}

      {Datalist.length >= 2 && <button onClick={removeAll}>Remove All</button>}
    </>
  );
}

export default Todo;
