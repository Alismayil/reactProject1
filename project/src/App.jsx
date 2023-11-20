import './App.css';
import ChoiceSection from './components/choiceSection';
import FestivalSection from './components/festivalSection';
import FragmanSection from './components/fragmanSection';
import MagazineSection from './components/magazineSection';
import Header from './components/header';
import Navbar from './components/navbar';
import TicketSection from './components/ticketSection';
import Footer from './components/footer';
import SpeakersSection from './components/speakersSection';
import ResponseNavbar from './components/responseNavbar';
import UpperPAge from './components/upperPage';
import PopularSection from './components/popularSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ResponseNavbar/>
      <Header/>
      <FragmanSection/>
      <FestivalSection/>
      <ChoiceSection/>
      <PopularSection/>
      <MagazineSection/>
      <SpeakersSection/>
      <TicketSection/>
      <Footer/>
      <UpperPAge/>  
    </div>
  );
}

export default App;
