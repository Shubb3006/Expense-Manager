"use client";
import HandleDeleteSubmit from "./handle-delete-submit";
import styles from "./handle-delete.module.css";

export default function HandleDelete({ id, onClose, onDelete }) {
  return (
    <div className={styles["dialog-overlay"]}>
      <div className={styles["dialog-box"]}>
        <h2>Delete Expense</h2>
        <p>Are you sure you want to delete this expense?</p>
        <div className={styles["dialog-ctions"]}>
          <button className={`${styles["dialog-btn"]} ${styles.confirm}`} onClick={onDelete}>
            Yes, Delete
          </button>
          <button className={`${styles["dialog-btn"]} ${styles.cancel}`} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
