import Link from "next/link"

export default function PostCard ({ post }){
    return (
        // <h3>{post.title} &rarr;</h3>
        <Link href={post.uri} className={"card"}>
            {/* <a className="card"> */}
                <h3>{post.title} &rarr;</h3>
            {/* </a> */}
        </Link>
    )
}