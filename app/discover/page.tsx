'use client';
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [matches, setMatches] = useState(0);
  const [dogData, setDogData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [isMatch, setIsMatch] = useState(false);
  const myNumber = 2;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [count]);

  const handleClick = (e: any) => {
    setCount(count + 1);
    if (e.target.name === 'thumbsup') {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      if (randomNumber === myNumber) {
        setMatches(matches + 1);
        setIsMatch(true);
      } else {
        setIsMatch(false);
      }
    } else {
      setIsMatch(false);
    }
  };

  if (loading) {
    return <p className="container grid justify-items-center">Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error}</p>;
  }
  return (
    <>
      <div className="grid justify-items-center">
        <h1 className="p-4 text-4xl">Make New Friends!</h1>
        <h3 className="pb-4 text-2xl">
          Thumbs up on any pups you'd like to meet!
        </h3>
        <div className="relative">
          {dogData && (
            <img
              src={dogData?.message}
              alt="dog"
              style={{ height: 400, width: 400 }}
            />
          )}
          <button
            name="thumbsup"
            onClick={(e) => handleClick(e)}
            className="absolute bottom-7 right-2 rounded-full bg-green-700 p-2 text-xl"
          >
            👍
          </button>
          <button
            onClick={(e) => handleClick(e)}
            className="absolute bottom-7 left-2 rounded-full bg-red-600 p-2 text-xl"
          >
            👎
          </button>
        </div>
        <h1 className="p-4 text-4xl">
          Made friends with {matches} pups so far!
        </h1>
        <div className="container">
          <p
            className="p-2 text-center text-green-900"
            style={{ backgroundColor: isMatch ? 'lightgreen' : '' }}
          >
            {isMatch ? 'Yay! That Pup Liked You Too!!!' : null}{' '}
          </p>
        </div>
      </div>
    </>
  );
}
