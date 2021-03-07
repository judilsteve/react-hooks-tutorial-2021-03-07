import { useState, useEffect } from 'react';

async function getName(isAdmin) {
    await new Promise(res => window.setTimeout(res, 1500));
    return isAdmin ? 'James (Admin)' : 'James';
}

function useName(isAdmin) {
    const [name, setName] = useState(null);

    useEffect(() => {
        let cancel = false;
        const asyncWork = async () => {
            const name = await getName(isAdmin);
            if(cancel) return;
            setName(name);
        }
        asyncWork();
        return () => { cancel = true; setName(null); };
    }, [isAdmin]);

    return name;
}

function Greeting(props) {
    const { isAdmin } = props;

    const name = useName(isAdmin);

    if(name) return <div style={{fontSize: '32pt'}}>Hello, {name}!</div>;
    else return <div style={{fontSize: '32pt'}}>Loading...</div>;
}

function App() {
    const [isAdmin, setIsAdmin] = useState(false);

    return <>
        <button onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin</button>
        <Greeting isAdmin={isAdmin}/>
    </>;
}

export default App;
