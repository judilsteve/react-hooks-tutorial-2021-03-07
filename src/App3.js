import { useState } from 'react';

function App() {
    const [greetingCount, setGreetingCount] = useState(1);

    const greetings = [];
    for(let i = 0; i < greetingCount; i++) {
        greetings.push(<div style={{fontSize: '32pt'}}>Hello, world!</div>);
    }

    return <>
        <button onClick={() => setGreetingCount(greetingCount + 1)}>Another One</button>
        { greetings }
    </>;
}

export default App;
