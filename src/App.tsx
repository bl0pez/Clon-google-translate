import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import { useStore } from './hooks/useStore';
import { AUTO_DETECT_LANGUAGE } from './helpers/constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './interfaces';

function App() {

  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore();

  return (
    <Container fluid>
      <h1>Traslate clone</h1>
      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage} 
            onChange={setFromLanguage}  
          />
        </Col>
        <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_DETECT_LANGUAGE} onClick={interchangeLanguages}>
              <ArrowsIcon />
            </Button>
        </Col>
        <Col>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App
