import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import readingTime from "reading-time";
import ScrollAnimation from "react-animate-on-scroll";

const animateOnce = true;

const BlogItem = ({
  author,
  dateWritten,
  dateUpdated,
  title,
  body,
  id,
  imgId,
  index,
  isMobile,
}) => {
  const readStats = readingTime(body);
  const formatDate = (date) =>
    new Date(date).toLocaleDateString(
      {},
      {
        timeZone: "UTC",
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    );
  return (
    <article className="blog">
      <ScrollAnimation
        animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
        duration={0.6}
        className="blog__top"
        animateOnce={animateOnce}
      >
        <p className="p-small blog--info">
          <span className="blog--date">{formatDate(dateWritten)} - </span>
          <span className="blog--time-to-read">{readStats.text}</span>
          {dateUpdated && (
            <p className="blog--date__updated italic">
              Updated {formatDate(dateUpdated)}
            </p>
          )}
        </p>
        <h5 className="h5 blog--title">{title}</h5>
        <caption className="p-small blog--body s">
          {ReactHtmlParser(body)}
        </caption>
      </ScrollAnimation>
      <ScrollAnimation
        animateOnce={animateOnce}
        animateIn="animate__fadeIn"
        duration={0.6}
        delay={300}
        className="blog__bot"
      >
        <Link
          href={{
            pathname: "/blog/[id]",
            query: {
              id,
            },
          }}
        >
          <a className="p-small blog--cta">
            <span>Read More</span>{" "}
            <BsArrowRightCircle className="icon" width={25} height={25} />
          </a>
        </Link>
        <div className="blog--img__wrapper">
          <Image
            src={`http://143.198.146.26/assets/${imgId}`}
            layout="fill"
            className="blog--img"
            objectFit="cover"
            // placeholder="blur"
          />
        </div>
      </ScrollAnimation>
    </article>
  );
};

export default BlogItem;
