"use client";
import { SharExpense } from "@/lib/action";
import classes from "./page.module.css";
import ExpenseSubmit from "@/components/expense/expense-form";
import { useActionState } from "react";
export default function AddExpense() {
  const [state, formAction] = useActionState(SharExpense, { message: null,type:null });
  return (
    <form className={classes["expense-form"]} action={formAction}>
      <div className={classes["form-group"]}>
        <label htmlFor="expenseName">Expense Name:</label>
        <input type="text" id="expenseName" name="expenseName" required/>
      </div>
      <div className={classes["form-group"]}>
        <label htmlFor="expenseAmount">Amount:</label>
        <input type="number" id="expenseAmount" name="expenseAmount" required/>
      </div>
      <div className={classes["form-group"]}>
        <label htmlFor="expenseDate">Date:</label>
        <input type="date" id="expenseDate" name="expenseDate" />
      </div>
      <p className={classes.actions}>
        <ExpenseSubmit />
      </p>
      {state?.type==='error' && <p className={classes.formErrorMessage}>{state.message}</p>}
      {state?.type==='success' && <p className={classes.formSuccessMessage}>{state.message}</p>}
    </form>
  );
}
