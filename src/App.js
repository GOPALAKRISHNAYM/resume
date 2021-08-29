
import { BiPhoneCall, BiMailSend, BiLocationPlus } from "react-icons/bi";
import { MainBodyPart } from "./MainResume/MainBodyPart"
import { Footer } from "./MainResume/Footer"
import './App.css';


function App() {

  // const openLoc =( ) =>{
  //   window.open();
  // }

  return (
    <div className="App">
      <div class="card">
        <div class="container">
          <div class="header">
            <br />
            <b class="name">GOPALA KRISHNA</b>
          </div>

          <section>
            <div class="picture-part">
              <p class="tag-size">Software Engineer</p>
            </div>

            <div id="middlebox">
              <BiPhoneCall class="phone-call"></BiPhoneCall>
              <p class="phone-no">+91 9535489453</p>
            </div>
            <div class="divider"></div>
            <div id="rightbox1">
              <BiMailSend class="phone-call"></BiMailSend>
              <p class="email">gopalakrishnaym29@gmail.com</p>
            </div>
            <div class="divider"></div>
            <div id="rightbox">
              <BiLocationPlus class="loc-icon"></BiLocationPlus>
              <br />
              <a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TdIM0tKjjdg9BIqziwqTS8tKEhUyMlPTizJzM8DAJ0XCrU&q=siruguppa+location&oq=siruguppa+l&aqs=chrome.1.69i59j46j0j69i57j0j0i22i30i457j0i22i30l4.3805j0j9&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" class="loc">location</a>
            </div>
          </section>

          <MainBodyPart />
        </div>
      </div>
    </div>
  );
}

export default App;
