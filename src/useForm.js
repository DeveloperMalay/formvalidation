import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useForm = (validate) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    full_name: "",
    phone: "",
    terms_condition: false,
  });

  const [errors, setErrors] = useState({});
  const [issubmiting, setIsSubmitting] = useState(false);

  let navigate = useNavigate();
  

  function handlechange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevdata) => {
      return { ...prevdata, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validate(formData));
    setIsSubmitting(true);
    issubmiting?navigate("/barchart"):navigate('/');
  }
 
  return { handlechange, handleSubmit, formData, errors };
};

export default useForm;
