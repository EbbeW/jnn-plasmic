
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/jong_nederland_neeritter/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  