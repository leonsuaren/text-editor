import { ThemeProvider } from 'styled-components';

import * as vie from './views';
import * as uti from './utils';
import * as com from './components';

function App() {
  return (
    <ThemeProvider theme={uti.theme}>
      <uti.GlobalStyled />
      <com.Menu />
      <vie.TextEditor />
    </ThemeProvider>
  );
}

export default App;
