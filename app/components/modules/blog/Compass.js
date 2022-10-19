import { useRouter } from "next/router";
import Link from "next/link";
import { BsHouseDoor, BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from 'react'
import Aside from './Compass.styled'

const Compass = ({ pageName = null }) => {
  const router = useRouter();
  const [ isPost, setIsPost ] = useState()
  console.log(router);
  useEffect(() => {
    if (router.query?.category) setIsPost(false)
    else if (router.query?.slug) setIsPost(true)
  }, [router])
  return (
    <Aside className="blogNav" id="blogNav">
      <p className="p-small">
        <Link href="/">
          <a>
            <BsHouseDoor id="home" className="link" />
          </a>
        </Link>
        <BsChevronRight className="divider" />
        <Link href="/blog">
          <a className="link">Blog</a>
        </Link>
        {router?.query?.slug?.length > 0 && (
          <>
            <BsChevronRight />
            <Link href={{
              pathname: `/blog`,
              query: {
                category: router.query.slug[0]
              },
            }}>
              <a className="link capitalize">{router.query.slug[0]}</a>
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
    </Aside>
  );
};

export default Compass;
