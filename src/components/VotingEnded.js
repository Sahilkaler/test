import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ended.css';
import { Link } from 'react-router-dom'; 

function VotingEnded() {
  return (
      
      <div className="voting-ended-container">
      <div className="text-center">
      <h1 className="display-3  fw-bold text-white">Voting Has Ended</h1>
      <div>
        <div className="mt-5 fw-bold text-white">Want to view the live Vote count click here</div>
      <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>


      </div>
    </div>
  );
}

export default VotingEnded;
