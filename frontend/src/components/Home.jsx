import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MERN App</h1>
      {isAuthenticated ? (
        <p className="text-xl">Hello, {user?.name}! You're logged in.</p>
      ) : (
        <p className="text-xl">Please login or register to get started.</p>
      )}
    </div>
  );
}

export default Home;