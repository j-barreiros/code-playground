import React, { useState, useEffect } from 'react';

//Custom Hook
import useLocalStorage from './hooks/useLocalStorage';

//Components
import Editor from './components/Editor';
import TopBar from './components/TopBar';

function App() {
  const [html, setHtml] = useLocalStorage('html','');
  const [css, setCSS] = useLocalStorage('css','');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('')

  const [layoutMode, setLayoutMode] = useState('horizontal');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      <html>
    `)
    }, 250)

    return() => clearTimeout(timeout)
  }, [html, css, js])

  return (
  <>
    <section>
      <TopBar setLayoutMode={setLayoutMode} layoutMode={layoutMode}/>
    </section>
    <main className={`layout ${layoutMode === 'horizontal' ? 'horizontal-default' : 'vertical-default'}`}>
      <section className='pane top-pane'>

        <Editor
          language="xml"
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />

        <Editor
          language="css"
          displayName='CSS'
          value={css}
          onChange={setCSS}
        />

        <Editor
          language="javascript"
          displayName='JS'
          value={js}
          onChange={setJs}
        />

      </section>
      <section className='pane'>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </section>
    </main>
  </>
  );
}

export default App;
