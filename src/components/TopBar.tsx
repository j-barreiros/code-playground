type TopBarProps = {
    layoutMode: string;
    setLayoutMode(mode: string): void;
}

export default function TopBar(props: TopBarProps) {

    const { setLayoutMode, layoutMode } = props;
    return (
        <section className='topBar'>
            <div>
                <h2 className='topbar-title'>Code Playground</h2>
            </div>

            <div>
                <button
                    className={`layout-button ${layoutMode === 'horizontal' && 'btn-active'}`}
                    onClick={() => setLayoutMode('horizontal')}>
                    Horizontal
                </button>

                <button
                    className={`layout-button ${layoutMode === 'vertical' && 'btn-active'}`}
                    onClick={() => setLayoutMode('vertical')}>
                    Vertical
                </button>
            </div>
        </section>
    )
}