// src/App.jsx

import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    description: '',
    category: '',
    eventName: '',
    participantType: '',
    totalParticipants: '',
    totalHostParticipants: '',
    totalWomenParticipants: '',
    detailsOfParticipants: '',
    trackOfEvent: '',
    dateFrom: '',
    dateTo: '',
    totalHoursEngaged: '',
    collaborationDetails: '',
    detailedReport: '',
    creatives: null, // Handle file uploads
    eventPhotosStage: null,
    eventPhotosAudience: null,
    eventPhotosGroup: null,
    participantList: null,
    otherDetails: '',
    amountFromIEDCGrant: '',
    institutionContribution: '',
    sponsorships: '',
    registrationFees: '',
    incomeFromOtherSources: '',
    totalExpenditure: '',
  });

  const [status, setStatus] = useState('');
  const [pdfLink, setPdfLink] = useState('');
  const [docLink, setDocLink] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setPdfLink('');
    setDocLink('');

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
        method: 'POST',
        mode: 'cors', // Ensure CORS is handled
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus('Form submitted successfully!');
        setPdfLink(result.pdfUrl);
        setDocLink(result.dataDocUrl);
        setFormData({
          firstName: '',
          lastName: '',
          description: '',
          category: '',
          eventName: '',
          participantType: '',
          totalParticipants: '',
          totalHostParticipants: '',
          totalWomenParticipants: '',
          detailsOfParticipants: '',
          trackOfEvent: '',
          dateFrom: '',
          dateTo: '',
          totalHoursEngaged: '',
          collaborationDetails: '',
          detailedReport: '',
          creatives: null,
          eventPhotosStage: null,
          eventPhotosAudience: null,
          eventPhotosGroup: null,
          participantList: null,
          otherDetails: '',
          amountFromIEDCGrant: '',
          institutionContribution: '',
          sponsorships: '',
          registrationFees: '',
          incomeFromOtherSources: '',
          totalExpenditure: '',
        });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <h2>IEDC JECC Report Submission</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing fields */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">--Select Category--</option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
        </div>
        
        {/* New fields */}
        <div className="form-group">
          <label htmlFor="eventName">Name of Event:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="participantType">Event Participant Type:</label>
          <input
            type="text"
            id="participantType"
            name="participantType"
            value={formData.participantType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalParticipants">Total Number of Participants:</label>
          <input
            type="number"
            id="totalParticipants"
            name="totalParticipants"
            value={formData.totalParticipants}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalHostParticipants">Total Number of Participants from Host Institute:</label>
          <input
            type="number"
            id="totalHostParticipants"
            name="totalHostParticipants"
            value={formData.totalHostParticipants}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalWomenParticipants">Total Number of Women Participation:</label>
          <input
            type="number"
            id="totalWomenParticipants"
            name="totalWomenParticipants"
            value={formData.totalWomenParticipants}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="detailsOfParticipants">Details of Participants from Other Institutes:</label>
          <textarea
            id="detailsOfParticipants"
            name="detailsOfParticipants"
            rows="4"
            value={formData.detailsOfParticipants}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="trackOfEvent">Track of Event:</label>
          <select
            id="trackOfEvent"
            name="trackOfEvent"
            value={formData.trackOfEvent}
            onChange={handleChange}
            required
          >
            <option value="">--Select Track--</option>
            <option value="Innovation">Innovation</option>
            <option value="Entrepreneurship">Entrepreneurship</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dateFrom">Date From:</label>
          <input
            type="date"
            id="dateFrom"
            name="dateFrom"
            value={formData.dateFrom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateTo">Date To:</label>
          <input
            type="date"
            id="dateTo"
            name="dateTo"
            value={formData.dateTo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalHoursEngaged">Total Number of Hours Engaged:</label>
          <input
            type="number"
            id="totalHoursEngaged"
            name="totalHoursEngaged"
            value={formData.totalHoursEngaged}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collaborationDetails">Details of Communities or Clubs Collaborated with:</label>
          <textarea
            id="collaborationDetails"
            name="collaborationDetails"
            rows="4"
            value={formData.collaborationDetails}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="detailedReport">Detailed Report of the Event (Min 200 words):</label>
          <textarea
            id="detailedReport"
            name="detailedReport"
            rows="6"
            value={formData.detailedReport}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="creatives">Creatives Created for the Event (Max 10 files):</label>
          <input
            type="file"
            id="creatives"
            name="creatives"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventPhotosStage">Photograph of the Event - Stage (GeoTagged):</label>
          <input
            type="file"
            id="eventPhotosStage"
            name="eventPhotosStage"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventPhotosAudience">Photograph of the Event - Audience (GeoTagged):</label>
          <input
            type="file"
            id="eventPhotosAudience"
            name="eventPhotosAudience"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventPhotosGroup">Photograph of the Event - Group Photo (GeoTagged):</label>
          <input
            type="file"
            id="eventPhotosGroup"
            name="eventPhotosGroup"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="participantList">Participant List (Excel Format):</label>
          <input
            type="file"
            id="participantList"
            name="participantList"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="otherDetails">Other Details (Schedule, Resource Person Details, etc.):</label>
          <textarea
            id="otherDetails"
            name="otherDetails"
            rows="4"
            value={formData.otherDetails}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="amountFromIEDCGrant">Amount Taken from IEDC Grant:</label>
          <input
            type="number"
            id="amountFromIEDCGrant"
            name="amountFromIEDCGrant"
            value={formData.amountFromIEDCGrant}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="institutionContribution">Institution Contribution:</label>
          <input
            type="number"
            id="institutionContribution"
            name="institutionContribution"
            value={formData.institutionContribution}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sponsorships">Sponsorships:</label>
          <input
            type="number"
            id="sponsorships"
            name="sponsorships"
            value={formData.sponsorships}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registrationFees">Registration Fees:</label>
          <input
            type="number"
            id="registrationFees"
            name="registrationFees"
            value={formData.registrationFees}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="incomeFromOtherSources">Income from Other Sources:</label>
          <input
            type="number"
            id="incomeFromOtherSources"
            name="incomeFromOtherSources"
            value={formData.incomeFromOtherSources}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalExpenditure">Total Expenditure:</label>
          <input
            type="number"
            id="totalExpenditure"
            name="totalExpenditure"
            value={formData.totalExpenditure}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>

      {status && <div className="status">{status}</div>}

      {pdfLink && (
        <div className="links">
          <a href={pdfLink} target="_blank" rel="noopener noreferrer">Download PDF</a>
        </div>
      )}

      {docLink && (
        <div className="links">
          <a href={docLink} target="_blank" rel="noopener noreferrer">View Data Document</a>
        </div>
      )}
    </div>
  );
}

export default App;
