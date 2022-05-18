export default function validateInfo(formData) {
  let errors = {};

  if (!formData.full_name.trim()) {
    errors.full_name = "full name required";
  }

  if (!formData.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email address is invalid";
  }
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!formData.confirm_password) {
    errors.confirm_password = "Password is required";
  } else if (formData.confirm_password !== formData.password) {
    errors.confirm_password = "Passwords do not match";
  }

  if (!formData.phone) {
    errors.phone = "Please enter a phone number";
  } else if (!/^[0-9\b]+$/.test(formData.phone)) {
    errors.phone = "Please enter only number";
  } else if (formData.phone.length !== 10) {
    errors.phone = "Phone number needs to be 10 characters";
  }

  if (!formData.terms_condition) {
    errors.terms_condition = "Please confirm the Terms and condition";
  }
  return errors;
}
