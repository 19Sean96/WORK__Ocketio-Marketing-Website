import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
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

  return (
    <article className="blog">
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
      <p className="p-small blog--body">{ReactHtmlParser(body)}</p>

      <Link
        href={{
          pathname: "/blog/[id]",
          query: {
              id,
            }
        }}
      >
        <a className="p-small">Read More</a>
      </Link>
    </article>
  );
};

export default BlogItem;
