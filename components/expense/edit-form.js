"use client";
import { useFormStatus } from "react-dom";
import styles from "./edit-form.module.css";

export default function EditSubmit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={styles.confirm}>
      {pending ? "Saving..." : "Save"}
    </button>
  );
}
