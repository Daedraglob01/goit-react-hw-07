import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { deleteContactsThunk } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <p>
          <FaUserAlt className={styles.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={styles.icon} />
          {number}
        </p>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;