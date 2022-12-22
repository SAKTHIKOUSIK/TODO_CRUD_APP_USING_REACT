import ToDo from './components/ToDo';
import { Container } from '@mui/material';
import { containerStyle } from './theme/customStyles';

const App = () => {
  return (
    <>
      <Container sx={containerStyle}>
        <ToDo />
      </Container>
    </>
  );
};

export default App;
