import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";
import Swal from 'sweetalert2'

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTransAction = (formValue , setIsShow) => {
    if (formValue.amount === 0 || formValue.desc === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter Description or Amount',
      })
    } else {
      setTransaction([...transaction, { ...formValue, id: Date.now() }]);
      setIsShow(false)
    }
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transaction.map((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transaction]);

  return (
    <section className="container">
      <OverViewComponent
        expense={expense}
        income={income}
        addTransAction={addTransAction}
      />
      <TransActionComponent transaction={transaction} />
    </section>
  );
};

export default ExpenseApp;
