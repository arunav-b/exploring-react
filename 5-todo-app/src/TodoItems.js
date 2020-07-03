import React from "react";
import FlipMove from "react-flip-move";

function createTasks(item, props) {
  return (
    <li onClick={() => props.delete(item.key)} key={item.key}>
      {item.text}
    </li>
  );
}

const TodoItems = (props) => {
  return (
    <ul className="theList">
      <FlipMove duration={500} easing="ease-out">
        {props.entries.map((item) => createTasks(item, props))}
      </FlipMove>
    </ul>
  );
};

export default TodoItems;
