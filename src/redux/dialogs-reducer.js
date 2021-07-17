// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ],

    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Женя' },
        { id: 3, name: 'Настя' },
        { id: 4, name: 'Вика' },
        { id: 5, name: 'Артур' },
    ],

    // newMessageBody: ''
};

const dialogsReducer= (state = initialState, action) => {
    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY: 
        //     return {
        //         ...state,
        //         newMessageBody: action.body
        //     };
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
                ...state,
                // newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

// export const updateNewMessageBodyCreator = (body) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_BODY,
//         body: body
//     }
// }

export default dialogsReducer;