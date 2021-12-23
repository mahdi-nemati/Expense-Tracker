import { useEffect, useState } from "react";
import React, { Component } from "react";
import Select from "react-select";

const TransActionComponent = ({ transaction }) => {
  const [search, setSearch] = useState("");
  const [filteredTrans, setFiltredTrans] = useState(transaction);

  const filterFunc = (value) => {
    if (!value || value === "") {
      setFiltredTrans(transaction);
      return;
    } else {
      const finalFilter = transaction.filter((t) =>
        t.desc.toLowerCase().includes(value.toLowerCase())
      );
      setFiltredTrans(finalFilter);
    }
  };
  useEffect(() => {
    filterFunc(search);
  }, [transaction]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
    filterFunc(e.target.value);
  };

  if (!transaction.length)
    return (
      <div className="remainPage">
        <h4>There is no transaction here</h4>
        <p>Add some !</p>
      </div>
    );

  const selectOption = [
    { value: "expense", label: "Expense" },
    { value: "income", label: "Income" },
    { value: "", label: "All" },
  ];

  const selectHandler = (e) => {
    console.log(e.value);
    switch (e.value) {
      case "":
        return setFiltredTrans(transaction);
      case "income":
        const incomeFilter = transaction.filter((t) => t.type === "income");
        return setFiltredTrans(incomeFilter);
      case "expense":
        const expenseFilter = transaction.filter((t) => t.type === "expense");
        return setFiltredTrans(expenseFilter);
    }
  };

  return (
    <div>
      <p className="searchHeadCon">Transaction !</p>
      <div className="searchInputCon">
        <input
          type="text"
          value={search}
          onChange={changeHandler}
          className="inputTarget searchInput"
          placeholder="Search for..."
        />
        <Select options={selectOption} onChange={selectHandler} />
      </div>
      {filteredTrans.length ? (
        filteredTrans.map((trans) => {
          return (
            <section className="resultCon">
              <div key={trans.id} className="result">
                <p>
                  <span>{trans.desc}</span>
                </p>
                <p>
                  <span
                    className={
                      trans.type === "expense"
                        ? "expenseResult"
                        : "incomeResult"
                    }
                  >
                    {trans.amount} $
                  </span>
                </p>
              </div>
            </section>
          );
        })
      ) : (
        <div className="remainPage">
          <h4>Nothing Found</h4>
        </div>
      )}
    </div>
  );
};

export default TransActionComponent;
