export default function TopBar(props:any) {

    const  {setLayoutMode} = props;
    return (
        <section className='topBar'>
            <div>
                <h2>Code Playground</h2>
            </div>

            <div>
                <button onClick={() => setLayoutMode('horizontal')}>Horizontal</button>
                <button onClick={() => setLayoutMode('vertical')}>Vertical</button>
            </div>
        </section>
    )
}