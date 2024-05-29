//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rating: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      rating: '',
      feedback: ''
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    clearForm();
  };

  return (
    <div className="App">
      <div class="container">
        <h2>Survey Form</h2>
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Your Full Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div class="form-group">
                <label for="phone">phone:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="123-456-7890" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
            <label>Rating:</label>
            <div className="rating">
              <input type="radio" id="star5" name="rating" value="5" onChange={handleChange} />
              <label htmlFor="star5" title="5 stars">☆</label>
              <input type="radio" id="star4" name="rating" value="4" onChange={handleChange} />
              <label htmlFor="star4" title="4 stars">☆</label>
              <input type="radio" id="star3" name="rating" value="3" onChange={handleChange} />
              <label htmlFor="star3" title="3 stars">☆</label>
              <input type="radio" id="star2" name="rating" value="2" onChange={handleChange} />
              <label htmlFor="star2" title="2 stars">☆</label>
              <input type="radio" id="star1" name="rating" value="1" onChange={handleChange} />
              <label htmlFor="star1" title="1 star">☆</label>
            </div>
          </div>
            <div class="form-group">
                <label for="feedback">Feedback:</label>
                <textarea id="feedback" name="feedback" placeholder="please response" value={formData.feedback} onChange={handleChange} required></textarea>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    </div>
  );
}

export default App;
