import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../Common/FormControls/FormsControls';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;
    
  
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
}

const maxLengt50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='newMessageBody' placeholder='Enter your message'
            validate={[required, maxLengt50]} />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    );
}

const AddMessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
}) (AddMessageForm)

export default Dialogs;