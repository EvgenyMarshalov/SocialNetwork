import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://5mod.ru/uploads/posts/2020-12/1607051489_1607051535.png' />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;