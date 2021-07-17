import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../Common/FormControls/FormsControls';

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

export default reduxForm({form: 'dialog-add-message-form'}) (AddMessageForm);
