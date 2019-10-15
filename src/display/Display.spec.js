import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

// * CHECKS FOR DEFAULT SETTINGS.
test('Display renders correctly', () => {
    const { getByText } = render(<Display />);

    // * GATE
    getByText('Open', { exact: true })
    getByText('Unlocked', { exact: true })

    // ! LOG DATA TO TERMINAL
    if (!!getByText('Open') === true && !!getByText('Unlocked') === true) {
        console.log('Gate is currently open and unlocked!');
    }
});