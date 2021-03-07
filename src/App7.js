import { useState, useEffect } from 'react';

async function getName(isAdmin) {
    await new Promise(res => window.setTimeout(res, 1500));
    return isAdmin ? 'James (Admin)' : 'James';
}

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [name, setName] = useState(null);

    useEffect(() => {
        let cancel = false;
        (async () => {
            const name = await getName(isAdmin);
            if(cancel) return;
            setName(name);
        })();
        return () => { cancel = true; setName(null); };
    }, [isAdmin]);

    return <>
        <button onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin</button>
        <div style={{fontSize: '32pt'}}>{ name ? `Hello, ${name}!` : 'Loading...' }</div>
    </>;
}

export default App;
