//import
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  //declaring constants
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);

  //API calling
  useEffect(() => {
    async function fetchFact() {
      try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setFact(data.fact);
      } catch (error) {
        console.error("Error fetching cat fact:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFact();
  }, []);

  //fetch new fact
  const handleFetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    } finally {
      setLoading(false);
    }
  };

  //main page
  return (
    <main className="flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Random Cat Fact</h1>
      {loading ? (
        //display GIF while loading
        <div className="flex items-center justify-center">
          <img
            src="/reload-cat.gif"
            alt="Loading cat facts"
            style={{ width: "100px" }}
          />
        </div>
      ) : (
        //display the fact when loaded
        <p className="text-lg text-center">{fact}</p>
      )}
      <button
        className="text-xl mt-8 bg-teal-500 hover:bg-teal-800 text-white  hover:text-white font-bold py-3 px-5 rounded-full transition duration-300 ease-in-out transform hover:scale-95"
        onClick={handleFetchFact}
        disabled={loading} //disable button while loading
      >
        More Facts about Cats
      </button>
    </main>
  );
}
