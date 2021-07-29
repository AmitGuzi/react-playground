import Comment from "./Comment/Comment";
export default function CommentList(props) {
    return <div>
        <Comment content={'text'} author={"Amit"} />
        <Comment content={'more text'} author={"Nir"} />
        <Comment content={'another text'} author={"Tal"} />
    </div>;
}