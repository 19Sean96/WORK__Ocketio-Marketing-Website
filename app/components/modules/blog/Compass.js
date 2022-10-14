import { useRouter } from "next/router";
import Link from "next/link";
import { BsHouseDoor, BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from 'react'
const Compass = ({ pageName = null }) => {
  const router = useRouter();
  const [ isPost, setIsPost ] = useState()

  useEffect(() => {
    if (router.query?.category) setIsPost(false)
    else if (router.query?.slug) setIsPost(true)
  }, [router])
  return (
    <aside className="blogNav" id="blogNav">
      <p className="p-small">
        <Link href="/">
          <span>
            <BsHouseDoor id="home" className="link" />
          </span>
        </Link>
        <BsChevronRight className="divider" />
        <Link href="/blog">
          <a className="link">Blog</a>
        </Link>
        {router?.query?.slug?.length > 0 && (
          <>
            <BsChevronRight />
            <Link href={`/blog/${router.query.slug[0]}`}>
              <a className="link capitalize">{router.query.slug[0]}</a>
            </Link>
          </>
        )}
        {router?.query?.category && (
          <>
            <BsChevronRight />
            <Link href={router.asPath}>
              <a href="" className="link capitalize">{router.query.category}</a>
            </Link>
          </>
        )}
        {router?.query?.slug?.length > 1 && (
          <>
            <BsChevronRight />
            <Link href={router.asPath}>
              <a className="link capitalize">{pageName}</a>
            </Link>
          </>
        )}
      </p>
    </aside>
  );
};

export default Compass;
