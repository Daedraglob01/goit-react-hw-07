import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(addContactThunk(values));
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form className={styles.formContainer}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <Field name="name" />
          <ErrorMessage component="div" name="name" className={styles.errorText} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone">Phone</label>
          <Field name="phone" />
          <ErrorMessage component="div" name="phone" className={styles.errorText} />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;