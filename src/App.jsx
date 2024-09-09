import "./App.css";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className="appContainer">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;