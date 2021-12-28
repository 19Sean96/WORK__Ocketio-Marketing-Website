import { useState, useRef } from "react";
import { BsChevronRight } from "react-icons/bs";

const FAQList = ({ list }) => {
  return (
    <section className="faq--list">
      {list.map(({ question, answer }) => (
        <FAQListItem question={question} answer={answer} />
      ))}
    </section>
  );
};

const FAQListItem = ({ question, answer }) => {
  const [isOpen, toggleOpen] = useState(false);

  const ref = useRef();
  //   console.log(ref.current.clientHeight);
  return (
    <article className="faq--list--item" onClick={(e) => toggleOpen(!isOpen)}>
      <div className="heading">
        <h6
          className="h6"
          style={{
            color: isOpen ? "#0144e4" : "#252939",
          }}
        >
          {question}
        </h6>
        <div
          className="icon"
          style={{
            position: "relative",
            transform: `rotate(${isOpen ? 90 : 0}deg)`,
            transition: "all .3s ease-in-out",
            height: "30px",
            width: "30px",
          }}
        >
          <BsChevronRight
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fill: isOpen ? "#0144e4" : "#252939",
              transition: "all .3s ease-in-out",
              height: '24px',
              width: 'auto'
            }}
          />
        </div>
      </div>
      <div
        className="body"
        style={{
          maxHeight: isOpen ? ref.current.clientHeight + 35 : 0,
          transition: "max-height .4s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <p
          ref={ref}
          className="p-small"
          style={{
            position: "relative",
            transition:
              "transform .35s cubic-bezier(.25, 1, .5, 1), opacity .25s cubic-bezier(0.64, 0, 0.78, 0)",
            transform: `translateY(${isOpen ? 0 : 100}%)`,
            opacity: isOpen ? 1 : 0,
          }}
        >
          {answer}
        </p>
      </div>
    </article>
  );
};

export default FAQList;
