import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

// * CHECKS FOR DEFAULT SETTINGS.
test('Display renders correctly', () => {
    const { getByText } = render(<Display />);

    // * GATE
    const open = getByText('Open', { exact: true })
    const unlocked = getByText('Unlocked', { exact: true })

    // ? EXPECTATIONS
    expect(!!open).toBe(true)
    expect(!!unlocked).toBe(true)

    // ! LOG DATA TO TERMINAL
    if (
        !!open === true
        &&
        !!unlocked === true
    ) {
        return console.log('Gate is currently open and unlocked!!');
    }
});