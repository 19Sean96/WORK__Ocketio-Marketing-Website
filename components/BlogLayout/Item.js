import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import readingTime from "reading-time";
import { useState, useEffect } from 'react'

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
  category,
  slug,
  tileWidth

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
      href='/blog/[...slug]'
      as={`/blog/${category}/${slug}`}
    >
      <article 
        className={`blog blog_w-${tileWidth}`}
      >
        <div
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
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogItem;
