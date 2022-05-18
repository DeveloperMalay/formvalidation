import "./index.scss";
import pic from "./pic/form_image.png";
import useForm from "./useForm";
import validate from "./validateInfo";

function App() {
  const { handlechange, handleSubmit, formData, errors } = useForm(validate);
 


  return (
    <div className="App">
      <div className="container">
        <div className="form_image">
          <img src={pic} alt="" />
          <div className="form_image_text">
            <h2>Choose a date range</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Possimus optio expedita
            </p>
          </div>
        </div>
        <div className="input_form">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Your email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handlechange}
              // autoComplete="off"
            />
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handlechange}
            />
            {errors.password && <p>{errors.password}</p>}
            <label htmlFor="confirm_password"> Confirm your password</label>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handlechange}
            />
            {errors.confirm_password && <p>{errors.confirm_password}</p>}
            <label htmlFor="your_name">Your full name</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handlechange}
            />
            {errors.full_name && <p>{errors.full_name}</p>}
            <label htmlFor="phone_number">Your phone number</label>
            <input
              type="tel"
              name="phone"
              className="phone"
              value={formData.phone}
              onChange={handlechange}
            />
            {errors.phone && <p>{errors.phone}</p>}
            <label className="check_box">
              I read and agree Terms and Conditions
              <input
                type="checkbox"
                name="terms_condition"
                checked={formData.terms_condition}
                onChange={handlechange}
              />
              <span className="checkmark"></span>
            </label>
            {errors.terms_condition && <p>{errors.terms_condition}</p>}
            <button type="submit" >Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
// https://docs.google.com/document/d/15pL0GuZiwIRWGxvlJtldHDftOXNDwMG5tyKCf-rXG_k/edit
