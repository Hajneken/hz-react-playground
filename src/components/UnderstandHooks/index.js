import React, {useState} from 'react';

// importing useState which is a hook

export default function HookyComponent() {
    // useState returns array of size 2
    const state = useState("");

    // first is the initial state which can be whatever we want
    // -----> const text = state[0]
    // second is the function to update this state
    // -----> const setText = state[1]

    const[text, setText] = useState('');

    const[checked, setChecked] = useState(false);

    // WATCHOUT when using `text` and `checked` together within one `state` object
    // like this `const [state, setState] = useState({text: '', checked: false})`
    // ❗❗❗❗ setState() does not perform shallow update, but overwrites object ❗❗❗❗



    return (
        <section>
            <h1>{text}</h1>
            <input type="text"
                   value={text}
                   onChange={e => setText(e.target.value)}/>
            <input type="checkbox"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}/>
        </section>

    )
}
