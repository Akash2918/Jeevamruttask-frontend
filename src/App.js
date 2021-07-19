// import logo from './logo.svg';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import './App.css';

const getData = async () => {
  axios.get('http://localhost:8000/data/all/')
  .then(data => {
    console.log(data.data)
    return data.data
  })
  .catch(err => {
    console.log(err);
  })
}

const sendData = async (formData) => {
  axios.post('http://localhost:8000/data/all/', data=formData)
  .then(res => {
    // console.log("Data successful");
    alert("Form submitted successfully")
    console.log(res);
  })
  .catch(res => {
    console.log("Error occured");
    console.log(res);
  })
}


let data = getData();
console.log(data)

function App() {
  return (
    <div className="">
      <Header />
      <div className='backgroundClass'>
        <Body sendData={ sendData } />
      </div>
      <Footer />
    </div>
  );
}

export default App;
