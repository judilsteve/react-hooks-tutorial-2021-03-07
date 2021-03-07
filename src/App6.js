import { useEffect, useState } from 'react';

async function getName() {
    await new Promise(res => window.setTimeout(res, 1500));
    return 'James';
}

function App() {
    const [name, setName] = useState(null);

    useEffect(() => {
        let cancel = false;
        (async () => {
            const name = await getName();
            if(cancel) return;
            setName(name);
        })();
        return () => { cancel = true; }
    }, []);

    if(name) return <div style={{fontSize: '32pt'}}>Hello, {name}!</div>;
    else return <div style={{fontSize: '32pt'}}>Loading...</div>;
}

export default App;
