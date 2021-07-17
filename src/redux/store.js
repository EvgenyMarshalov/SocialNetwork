import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 5 },
                { id: 2, message: "It's my first post", likesCount: 10 },
                { id: 3, message: 'Yo', likesCount: 5 },
                { id: 4, message: 'Yo', likesCount: 5 },
                { id: 5, message: 'Yo', likesCount: 5 },
            ],
    
            newPostText: 'it-kamasutra.com'
        },
    
        dialogsPage: {
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

            newMessageBody: ''
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
   
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }

}


export default store;