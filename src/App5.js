import { useEffect, useState } from 'react';

function Greeting(props) {
    const { name, removeGreeting } = props;

    useEffect(() => {
        alert('A new greeting was added');
        return () => alert('A greeting was removed');
    }, []);

    return <>
        <div style={{fontSize: '32pt'}}>Hello, {name}!</div><button onClick={removeGreeting}>Remove</button>
    </>;
}

function App() {
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

    const removeGreeting = name => {
        setGreetings(greetings.filter(g => g !== name));
    }

    return <>
        <input value={nextGreeting} onChange={e => setNextGreeting(e.target.value)}></input>
        <button onClick={() => addGreeting(nextGreeting)}>Greet</button>
        { greetings.map(name => <Greeting name={name} removeGreeting={() => removeGreeting(name)} key={name}/>) }
    </>;
}

export default App;
