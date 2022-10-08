import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { 
  AiFillMail,
  AiOutlineArrowUp
} from 'react-icons/ai'
const EmailIntakeInput = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async data => {
    let { email } = data

    const result = await fetch('/api/addSubscriber', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const res = await result.json()
    console.log('RESULTING: ', res)

  }

  const watchAllInputs = watch();

  useEffect(() => {
    console.log(watchAllInputs);
  }, [watchAllInputs]);

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
        <AiFillMail 
          className="section--form--input__icon"
        />
        <label
          htmlFor="email"
          className="section--form--input__label"
        >
          Email Address
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