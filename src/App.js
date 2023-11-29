import React from 'react';
import './App.css';
import Header from './component/Header';
import Main from "./component/Form";
import { MAster } from './component/Main';
import { Apply, Date2 } from './component/Apply';
import Footer from './component/Footer';
import Button from './component/Button';
import popup from './component/popup'
// import ResForm from "./component/resform";
import {
  Program, Paragraph, Package, Specialization, Business, Marketing, Finance, Human, Operations, Banking, Digital, Analytics,
  Agri, Dual, Hospital, Corporate, Sports, Innovation, Eligibility, Placements, Some, Controls, Star, Fees, TotalFee,
} from './component/Main';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <Header></Header>
      </div>
      <div className='Back'>
        <div className='container-fluid'>
          <div className='row '>

            <div className='col-lg-7 col-md-6 col-sm-12'>
              <MAster />
            </div>

            <div className='col-lg-5 col-md-6 col-sm-12  '>
              <Main></Main>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid '>
        <div className='row '>
          <div className='col-lg-10 mx-auto'> <Apply></Apply></div>
        </div>
      </div>

      {/* <div className='container-fluid '>
        <div className='row  '>
          <div className='col-sm-10'><Date2 /></div>
        </div>
      </div> */}


      <Program></Program>
      <Paragraph />
      <Package />
      <div><Specialization /></div>



      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <Business />
          </div>
          <div className='col-lg-4'>
            <Marketing />
          </div>
          <div className='col-lg-4'>
            <Finance />
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <Human />
          </div>

          <div className='col-lg-4'>
            <Operations />
          </div>
          <div className='col-lg-4'>
            <Banking />
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <Digital />
            {/* <Hospital/> */}
          </div>

          <div className='col-lg-4'>
            <Analytics />
          </div>

          <div className='col-lg-4'>
            <Agri />
          </div>
        </div>
      </div>

      <div>
        <Dual />
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <Hospital />
          </div>

          <div className='col-lg-4'>
            <Corporate />
          </div>

          <div className='col-lg-4'>
            <Sports />
          </div>

        </div>

      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <Innovation />
          </div>
        </div>

      </div>

      <div className='container-fluid'>
        <div className='row'>
          <Eligibility />
          <Placements />

        </div>
      </div>

      <div>
        <Some />
      </div>

      <div className='row container-fluid'>
        <div className='col-lg-10 mx-auto'>  <Controls /></div>
      </div>
      <div className='container-fluid row '>
        <div className='col-sm-12 col-md-12 col-lg-12'> <Star /></div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-5 col-sm-4'><Fees /></div>
          <div className='col-lg-1 '></div>
          <div className='col-lg-4 col-sm-4'>
            <TotalFee />
          </div>
        </div>
      </div>
      <div>
        <popup />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
