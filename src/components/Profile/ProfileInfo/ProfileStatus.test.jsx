import React from 'react';
import { create } from 'react-test-renderer';
// import TestRenderer from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='fbi.com' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('fbi.com');
    });
});
