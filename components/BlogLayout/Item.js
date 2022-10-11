import Link from "next/link";
import Image from "next/image";
import readingTime from "reading-time";
const BlogItem = ({
	dateWritten,
	dateUpdated,
	title,
	body,
	imgId,
	category,
	slug,
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
		<Link href="/blog/[...slug]" as={`/blog/${category}/${slug}`}>
			<a className="blog">
				<div className="blog__inner">
					<div className="blog__top">
						<p className="p-small blog--info">
							<span className="blog--date">{formatDate(dateWritten)} - </span>
							<span className="blog--time-to-read">{readStats.text}</span>
						</p>
						<h5 className="h5 blog--title">{title}</h5>
						<p className="p-sm blog--body">{body}</p>
					</div>
					<div className="blog__bot">
						<p className="p-sm blog--cta">Read More</p>
						<div className={`blog--img__wrapper`}>
								<Image
									src={`https://cms.wirewise-dev.com/assets/${imgId}`}
									layout="fill"
									className="blog--img"
									objectFit="cover"
									loading="lazy"
									placeholder="blur"
									blurDataURL="/images/placeholder/placeholder-img.svg"
								/>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};
export default BlogItem;
