import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
const BlogContext = createContext();

export function BlogWrapper({ children }) {
	const [blogs, setBlogs] = useState([]);

	return (
		<BlogContext.Provider
			value={{
				blogs,
				setBlogs,
			}}>
			{children}
		</BlogContext.Provider>
	);
}

export function useBlogContext() {
	return useContext(BlogContext);
}
