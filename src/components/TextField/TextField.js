import React from 'react';

function TextField({ state }) {
    return (
        <input value="" type="text" disabled={state} />
    );
}
export default TextField;