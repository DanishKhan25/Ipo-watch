function IPOList({ data }) {
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold mb-4 text-center mt-10">Listed IPOs</h1>
      <table className="border-collapse border border-black w-full bg-gray-100">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2">Company Name</th>
            <th className="border border-black px-4 py-2">URL</th>
            <th className="border border-black px-4 py-2">Symbol</th>
            <th className="border border-black px-4 py-2">Issue size</th>
            <th className="border border-black px-4 py-2">IPO Type</th>
            <th className="border border-black px-4 py-2">QIB Sub</th>
            <th className="border border-black px-4 py-2">Listing Date</th>
            <th className="border border-black px-4 py-2">Issue Price</th>
            <th className="border border-black px-4 py-2">Last Price</th>
            <th className="border border-black px-4 py-2">Listing Open</th>
            <th className="border border-black px-4 py-2">Listing Close</th>
            <th className="border border-black px-4 py-2">Todays Gain</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ipo) => (
            <tr key={ipo.sc_id}>
              <td className="border border-black px-4 py-2">
                {ipo.company_name || "N/A"}
              </td>
              <td
                className="border border-black px-4 py-2 max-w-50 text-blue-500 text-ellipsis overflow-hidden"
                style={{ wordWrap: "break-word" }}
              >
                <a
                  className="text-blue-500 text-ellipsis overflow-hidden max-w-50"
                  href={`https://www.moneycontrol.com/india/stockpricequote/${ipo.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`https://www.moneycontrol.com/india/stockpricequote/${ipo.url}` ||
                    "N/A"}
                </a>
              </td>
              <td className="border border-black px-4 py-2">
                <a href={ipo.url}>{ipo.company_code || "N/A"}</a>
              </td>
              <td className="border border-black px-4 py-2">
                {(ipo.issue_size / 10000000).toFixed(2) || "N/A"}
              </td>
              <td className="border border-black px-4 py-2">
                {ipo.ipo_type || "N/A"}
              </td>
              <td
                className={`border border-black px-4 py-2 ${
                  ipo.total_subs > 25 ? "text-green-500" : "text-black"
                }`}
              >
                {ipo.total_subs || "N/A"}
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
              <td className="border border-black px-4 py-2">
                {ipo.dt_open || "N/A"}
              </td>
              <td className="border border-black px-4 py-2">
                {ipo.dt_close || "N/A"}
              </td>
              <td className="border border-black px-4 py-2">
                {ipo.todays_gain?.toFixed(2) || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPOList;
