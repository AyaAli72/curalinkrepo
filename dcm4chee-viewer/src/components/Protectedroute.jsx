import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './authUtils';
import API_URL from "../api";

fetch(`${API_URL}/your-endpoint`)
  .then(res => res.json())
  .then(data => console.log(data));
/**
 * Protected Route Component
 * Redirects to login if user is not authenticated
 */
export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}