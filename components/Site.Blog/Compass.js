import { useRouter } from "next/router";
import Link from "next/link";
import { BsHouseDoor, BsChevronRight } from "react-icons/bs";

const Compass = ({ pageName = null }) => {
  const router = useRouter();
  console.log(router);
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
            <Link href={`/${router.query.slug[0]}`}>
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
    </aside>
  );
};

export default Compass;
