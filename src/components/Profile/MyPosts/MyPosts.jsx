import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = React.memo( (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );
    let newPostElement = React.createRef();
    let onAddPost = (values) => {props.addPost(values.newPostText);}
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

// class MyPosts extends PureComponent {
//     // shouldComponentUpdate(nextProps, nextState) {
//     //     return nextProps != this.props || nextState != this.state;
//     // }
//     render() {
//     let postsElements = this.props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );
//     let newPostElement = React.createRef();
//     let onAddPost = (values) => {this.props.addPost(values.newPostText);}

//     return (
//         <div className={s.postsBlock}>
//             <h3>My posts</h3>
//             <AddNewPostForm onSubmit={onAddPost} />
//             <div className={s.posts}>
//                 {postsElements}
//             </div>
//         </div>
//     );
//     }
// }

const maxLengt10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} placeholder={'Post message'}
                validate={[required, maxLengt10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm);

export default MyPosts;