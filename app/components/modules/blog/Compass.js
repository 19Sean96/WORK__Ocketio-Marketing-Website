import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillHome, AiFillCaretRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import Aside from "./Compass.styled";
import { useBlogContext } from "@context/blog";

const Compass = () => {
	const router = useRouter();
  const [ category, setCategory ] = useState(null)
	const { blogs } = useBlogContext();

  useEffect(() => {
    console.log('ROUTER: ', router);

    if (router.pathname.includes('slug')) {
      setCategory(router.query.slug[0])
    }
    else if (router.asPath.includes('blog?category')) {
      setCategory(router.query.category)
    }
    else setCategory('all')
  }, [router.asPath, blogs])

	return (
		<Aside className="blogNav" id="blogNav">
			<Link href="/">
				<a id="home">
					<AiFillHome className="link" />
				</a>
			</Link>

			<AiFillCaretRight className="divider" />
			<Link href="/blog">
				<a className="link">Blog</a>
			</Link>

			{category && (
				<>
					<AiFillCaretRight className="divider" />
					<Link
						href={{
							pathname: `/blog`,
							query: {
								category
							},
						}}>
						<a className="link capitalize">
							{category}
						</a>
					</Link>
				</>
			)}
		</Aside>
	);
};

export default Compass;
