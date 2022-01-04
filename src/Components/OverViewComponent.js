import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="headerCon">
      <div className="eICon">
        <button
          onClick={() => setIsShow(!isShow)}
          className={isShow ? "btn cancel" : "btn"}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
        <div className="expenseContainer">
          Expense <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className="expenseContainer">
          Income <span>{income} $</span>
        </div>
      </div>
      <div className="balanceContainer">
        <div className="balance">
          <p>Balance</p>
          <span
            style={income - expense < 0 ? { color: "red" } : { color: "green" }}
          >
            {income - expense} $
          </span>
        </div>
      </div>
      {isShow && (
        <TransActionForm
          addTransAction={addTransAction}
          setIsShow={setIsShow}
        />
      )}
    </div>
  );
};

export default OverViewComponent;
