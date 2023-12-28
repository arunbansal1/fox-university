import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import 'bootstrap/dist/js/bootstrap';
import UniversitySlider from './component/UniversitySlider';
import WhatIsOffer from './component/WhatIsOffer';
import FoxUniversity from './component/FoxUniversity';
import OurCourses from './component/OurCourses';
import CertifiedTeacher from './component/CertifiedTeacher';
import RequestForm from './component/RequestForm';
import RecentBlog from './component/RecentBlog';
import StudentSays from './component/StudentSays';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header/>
      <UniversitySlider/>
      <WhatIsOffer/>
      <FoxUniversity/>
      <OurCourses/>
      <CertifiedTeacher/>
      <RequestForm/>
      <RecentBlog/>
      <StudentSays/>
      <Footer/>
    </div>
  );
}

export default App;
