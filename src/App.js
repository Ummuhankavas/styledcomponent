import Header from "./components/Header";
import { ThemeProvider } from 'styled-components';

const theme ={
  colors:{
    header: '#fff',
    body: '#fff',
    footer: '#8A1C4A',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Header/>
    </ThemeProvider>
  );  
};

export default App;
