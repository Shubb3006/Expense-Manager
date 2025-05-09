// "use client";
// import styles from "./handle-edit.module.css";
// import { ShareUpdatedExpense } from "@/lib/action";
// import { useActionState, useState } from "react";

// export default function HandleEdit({ id, onClose, onEdit, expense }) {
//   const [isVisible, setIsVisible] = useState(true);
//   const [state, formAction] = useActionState(ShareUpdatedExpense, {
//     return: null,
//   });

//   if (state?.type === "success" && isVisible) {
//     setIsVisible(false);
//     onEdit(id); // Optionally, close the dialog after saving
    
//   }
  
//   return (
//     <div className={styles["dialog-overlay"]}>
//       <div className={styles["dialog-box"]}>
//         <h2>Edit Expense</h2>
//         <p>Enter the details</p>
//         <div className={styles["dialog-ctions"]}>
//           <form className={styles["expense-form"]} action={formAction}>
//             <input type="hidden" name="id" value={id} />
//             <div className={styles["form-group"]}>
//               <label htmlFor="expenseName">Expense Name:</label>
//               <input
//                 type="text"
//                 id="expenseName"
//                 name="expenseName"
//                 defaultValue={expense.expense}
//               />
//             </div>
//             <div className={styles["form-group"]}>
//               <label htmlFor="expenseAmount">Amount:</label>
//               <input
//                 type="number"
//                 id="expenseAmount"
//                 name="expenseAmount"
//                 defaultValue={expense.amount}
//               />
//             </div>
//             <p className={styles.actions}>Edit</p>
//             <button
//               type="submit"
//               className={`${styles["dialog-btn"]} ${styles.confirm}`}
//             >
//               Save
//             </button>
//             <button
//               className={`${styles["dialog-btn"]} ${styles.cancel}`}
//               type="button"
//               onClick={() => {
//                 onClose();
//                 onEdit(id)
//                 setIsVisible(false);
//               }}
//             >
//               Cancel
//             </button>
//             {state?.message && <p>{state.message}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";
import { useState } from "react";
import styles from "./handle-edit.module.css";
import { Editexpense } from "@/lib/action";
import EditSubmit from "./edit-form";

export default function HandleEdit({ expense, onClose, onEdit }) {
  const [expenseName, setExpenseName] = useState(expense.expense);
  const [amount, setAmount] = useState(expense.amount);

  function handleSubmit(e) {
    e.preventDefault();
    onEdit({
      id: expense.id,
      expense: expenseName,
      amount: parseFloat(amount),
      created_at: expense.created_at,
    });
  }

  return (
    <div className={styles["dialog-overlay"]}>
      <div className={styles["dialog-box"]}>
        <h2>Edit Expense</h2>
        <form onSubmit={handleSubmit} className={styles["expense-form"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="expenseName">Expense Name:</label>
            <input
              type="text"
              id="expenseName"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              required
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className={styles['dialog-btn']}>
            {/* <button type="submit" className={styles.confirm}>
              Save
            </button> */}
            <EditSubmit />
            <button
              type="button"
              className={styles.cancel}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
