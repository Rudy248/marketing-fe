import React, { useState, useEffect } from "react";
import api from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchCampaigns = async () => {
    const response = await api.get("/campaigns");
    setCampaigns(response.data);
  };

  const filterCampaigns = (status) => {
    setStatusFilter(status);
    if (status === "All") {
      setFilteredCampaigns(campaigns);
    } else {
      setFilteredCampaigns(
        campaigns.filter((campaign) => campaign.status === status)
      );
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div className="container py-4">
      <nav className="navbar d-flex align-items-center justify-content-between mb-4">
        <h1 className="display-4 fw-bold">Marketing Campaigns</h1>

        <div className="dropdown d-flex align-items-center gap-2">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="statusDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {statusFilter}
          </button>
          <ul className="dropdown-menu" aria-labelledby="statusDropdown">
            <li>
              <button
                className="dropdown-item"
                onClick={() => filterCampaigns("All")}
              >
                All
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => filterCampaigns("Active")}
              >
                Active
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => filterCampaigns("Paused")}
              >
                Paused
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="table-responsive">
        <table className="table table-bordered table-hover w-100">
          <thead>
            <tr className="table-light">
              <th className="py-3 px-4">Campaign Name</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 ">Clicks</th>
              <th className="py-3 px-4 ">Cost</th>
              <th className="py-3 px-4 ">Impressions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns
              .filter(
                (c) => statusFilter === "All" || c.status === statusFilter
              )
              .map((campaigns) => (
                <tr key={campaigns.id}>
                  <td className="py-3 px-4">{campaigns.name}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`badge ${
                        campaigns.status === "Active"
                          ? "bg-success"
                          : campaigns.status === "Paused"
                          ? "bg-warning"
                          : ""
                      }`}
                    >
                      {campaigns.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 ">{campaigns.clicks}</td>
                  <td className="py-3 px-4 ">Rs. {campaigns.cost}</td>
                  <td className="py-3 px-4 ">{campaigns.impressions}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
