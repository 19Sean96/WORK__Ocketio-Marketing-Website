import { useForm, Controller } from "react-hook-form";


const EmailIntakeInput = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const watchAllInputs = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="section--form">
      <div
        className={`section--form--input__wrapper ${
          watchAllInputs?.email?.length > 0 ? "has-value" : ""
        }`}
      >
        <input
          type="email"
          {...register("email", { required: true })}
          className="section--form--input"
        />
        <label
          htmlFor="email"
          className="section--form--input__label j-display _400"
        >
          Your email
        </label>
      </div>
      <input
        id="submit"
        type="submit"
        value="subscribe"
        className="btn btn--filled capitalize"
      />
    </form>
  );
};


export default EmailIntakeInput