import { useState, useMemo } from 'react';

function Greeting(props) {
    const { name } = props;
    console.log(`Render: Greeting (${name})`);

    return <div style={{fontSize: '32pt'}}>Hello, {name}!</div>
}

function App() {
    console.log('Render: App');
    const [greetings, setGreetings] = useState([]);

    const [nextGreeting, setNextGreeting] = useState('');

    const addGreeting = name => {
        if(greetings.includes(name)) {
            alert(`You have already greeted ${name}!`);
            return;
        }
        setGreetings([name, ...greetings]);
        setNextGreeting('');
    }

    const greetingsJsx = useMemo(() => {
        return greetings.map(name => <Greeting name={name} key={name}/>);
    }, [greetings]);

    return <>
        <input value={nextGreeting} onChange={e => setNextGreeting(e.target.value)}></input>
        <button onClick={() => addGreeting(nextGreeting)}>Greet</button>
        { greetingsJsx }
    </>;
}

export default App;
