import { NextSeo } from "next-seo";


export default function Downloads() {

    const THIS_URL = process.env.THIS_URL

    return (
        <>
            <NextSeo
                title="PLACEHOLDER"
                description="PLACEHOLDER"
                openGraph={{
                    url: `${THIS_URL}/downloads`,
                    title: 'Download and Get Started | Wirewise',
                    description: 'PLACEHOLDER',
                    // images: [
                    //     {
                    //         url,
                    //         width,
                    //         height,
                    //         alt
                    //     }
                    // ]
                }} 
            />
            <main className="main" id="main">
                hello world
            </main>
        </>
    )
}