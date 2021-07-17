import React from 'react';
import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer'

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 5 },
        { id: 2, message: "It's my first post", likesCount: 10 },
        { id: 3, message: 'Yo', likesCount: 5 },
        { id: 4, message: 'Yo', likesCount: 5 },
        { id: 5, message: 'Yo', likesCount: 5 },
    ]
    };

it('length of posts should be inctremented', () => {
    // 1. Test data
    let action = addPostActionCreator('The truth is out there');

    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(6);
});

it('message of new post should be correct', () => {
    // 1. Test data
    let action = addPostActionCreator('The truth is out there');
    
    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts[5].message).toBe('The truth is out there');
});

it('length of posts should be dectremented', () => {
    // 1. Test data
    let action = deletePost(1);
    
    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(4);
});

it("length of posts shouldn't be dectremented with incorrect id", () => {
    // 1. Test data
    let action = deletePost(10);
    
    // 2. Action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(5);
});
