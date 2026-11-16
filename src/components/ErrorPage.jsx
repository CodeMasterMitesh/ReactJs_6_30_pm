import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import './ErrorPage.css';

export const ErrorPage = ({
  code = '404',
  title = 'Page Not Found',
  message = "Sorry, the page you are looking for doesn't exist or has been moved.",
  onRetry = null,
}) => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-code">{code}</h1>
        <h2 className="error-title">{title}</h2>
        <p className="error-message">{message}</p>

        <div className="error-actions">
          {onRetry ? (
            <button onClick={onRetry} className="btn btn-primary">
              Try Again
            </button>
          ) : (
            <button onClick={() => navigate('/')} className="btn btn-primary">
              Go Home
            </button>
          )}

          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

