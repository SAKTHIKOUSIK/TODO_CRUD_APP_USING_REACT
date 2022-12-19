import ToDo from './components/ToDo';
import { Container, CssBaseline } from '@mui/material';
import { containerStyle } from './theme/customStyles';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container sx={containerStyle}>
        <ToDo />
      </Container>
    </>
  );
};

export default App;
