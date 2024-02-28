"use client";
import { useEffect, useState } from "react";

function IPOList() {
  const [ipoData, setIpoData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.moneycontrol.com/mcapi/v1/ipo/get-listed-ipo")
  //     .then((response) => response.json())
  //     .then((data) => setIpoData(data));
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.moneycontrol.com/mcapi/v1/ipo/get-listed-ipo"
        );
        const data = await response.json();
        const { listedIpo } = data?.data;
        setIpoData(listedIpo);
      } catch (error) {
        console.error("Error fetching IPO data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Listed IPOs</h1>
      <table className="border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Company Name</th>
            <th className="border border-black px-4 py-2 max-w-200">URL</th>
            <th className="border border-black px-4 py-2">Symbol</th>
            <th className="border border-black px-4 py-2">Industry</th>
            <th className="border border-black px-4 py-2">IPO Type</th>
            <th className="border border-black px-4 py-2">Listing Date</th>
            <th className="border border-black px-4 py-2">Issue Price</th>
            <th className="border border-black px-4 py-2">Last Price</th>
          </tr>
        </thead>
        <tbody>
          {ipoData?.map((ipo) => (
            <tr key={ipo.sc_id}>
              <td className="border border-black px-4 py-2">
                {ipo.company_name || "N/A"}
              </td>
              <td className="border border-black px-4 py-2 max-w-200">
                <a href={ipo.url} target="_blank" rel="noopener noreferrer">
                  {ipo.url || "N/A"}
                </a>
              </td>
              <td className="border border-black px-4 py-2">
                <a href={ipo.url}>{ipo.company_code || "N/A"}</a>
              </td>
              <td className="border border-black px-4 py-2">
                {ipo.industry || "N/A"}
              </td>
              <td className="border border-black px-4 py-2">
                {ipo.ipo_type || "N/A"}
              </td>
              <td className="border border-black px-4 py-2">
                {ipo.listing_date || "N/A"}
              </td>
              <td className="border border-black px-4 py-2">
                {ipo.issue_price || "N/A"}
              </td>
              <td className="border border-black px-4 py-2">
                {ipo.last_price || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPOList;
