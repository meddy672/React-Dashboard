import React from 'react';

function TextField({ state }) {
    return (
        <input type="text" disabled={state} />
    );
}
export default TextField;