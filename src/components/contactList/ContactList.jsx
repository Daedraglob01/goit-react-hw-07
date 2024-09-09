import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log(filteredContacts);

  return (
    <ul className={styles.listContainer}>
      {filteredContacts.map((cont) => (
        <Contact
          key={cont.id}
          id={cont.id}
          name={cont.name}
          number={cont.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
