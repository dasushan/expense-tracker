import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  const buttonClickHandler = () => {
    setTitle("New Title");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <div className="expense-item__location">{props.location}</div>
      <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
