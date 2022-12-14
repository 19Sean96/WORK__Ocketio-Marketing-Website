import ContentWrapper from "@util/ContentWrapper";
import BlogPreview from '@modules/blog'
import Section from './index.styled'

export default ({ blog_posts }) => {
	return (
		<ContentWrapper>
			<Section
				className="section section__with-grid all-columns"
				id="blogPreview">
				<div className="section--heading">
					<h2 className="h2 semi-bold capitalize">recent updates</h2>
				</div>
				<div className="section--body">
					<BlogPreview blogPosts={blog_posts} preview />
				</div>
			</Section>
		</ContentWrapper>
	);
};