import { useState } from "react";

const TransActionForm = ({ addTransAction, setIsShow }) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransAction(formValue, setIsShow);
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <header className="headerInput">Add Transaction !</header>
      <section className="inputContainer">
        <div>
          <p>Description</p>
          <input
            type="text"
            name="desc"
            onChange={changeHandler}
            value={formValue.desc}
            placeholder="Description"
            className="inputTarget"
          />
        </div>
        <div>
          <p>Amount</p>
          <input
            type="number"
            name="amount"
            onChange={changeHandler}
            value={formValue.amount}
            placeholder="Amount"
            className="inputTarget amountInput"
          />
        </div>
      </section>
      <section className="radioContainer">
        <div className="targetRadio">
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            value="expense"
            name="type"
            onChange={changeHandler}
            checked={formValue.type === "expense"}
            id="expense"
          />
        </div>
        <div>
          <label htmlFor="income">Income</label>
          <input
            type="radio"
            value="income"
            name="type"
            onChange={changeHandler}
            checked={formValue.type === "income"}
            id="income"
          />
        </div>
      </section>
      <div className="btnContainer">
        <button type="submit" className="btn">
         Save
        </button>
      </div>
    </form>
  );
};

export default TransActionForm;
