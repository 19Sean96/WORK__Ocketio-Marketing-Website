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
    <Link
      href={{
        pathname: "/blog/[id]",
        query: {
          id,
        },
      }}
    >
      <article className="blog">
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          duration={0.6}
          animateOnce={animateOnce}
          className="blog__inner"
        >
          <div className="blog__top">
            <p className="p-small blog--info">
              <span className="blog--date">{formatDate(dateWritten)} - </span>
              <span className="blog--time-to-read">{readStats.text}</span>
            </p>
            <h5 className="h5 blog--title">{title}</h5>
            <span className="p-small blog--body s">
              {ReactHtmlParser(body)}
            </span>
          </div>
          <div className="blog__bot">
            <p className="p-small blog--cta">
              <span>Read More</span>{" "}
              <BsArrowRightCircle className="icon" width={25} height={25} />
            </p>
            <div className="blog--img__wrapper">
              <Image
                src={`https://cms.wirewise-dev.com/assets/${imgId}`}
                layout="fill"
                className="blog--img"
                objectFit="cover"
                // placeholder="blur"
              />
            </div>
          </div>
        </ScrollAnimation>
      </article>
    </Link>
  );
};

export default BlogItem;
