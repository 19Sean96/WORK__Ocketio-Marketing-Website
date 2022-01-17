import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

const BlogItem = ({
  author,
  dateWritten,
  dateUpdated,
  timeToRead,
  title,
  body,
  id,
  imgId,
}) => {
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
  console.log(`http://143.198.146.26/assets/${imgId}`);
  return (
    <article className="blog">
      <div className="blog__top">
        <p className="p-small blog--info">
          By <span className="blog--author">{author} - </span>
          <span className="blog--date">{formatDate(dateWritten)} - </span>
          <span className="blog--time-to-read">{timeToRead}</span>
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
      </div>
      <div className="blog__bot">
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
          />
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
