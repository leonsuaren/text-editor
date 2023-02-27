import { ThemeProvider } from 'styled-components';

import * as com from './views';
import * as uti from './utils';

function App() {
  return (
    <ThemeProvider theme={uti.theme}>
      <uti.GlobalStyled />
      <com.TextEditor />
    </ThemeProvider>
  );
}

export default App;
