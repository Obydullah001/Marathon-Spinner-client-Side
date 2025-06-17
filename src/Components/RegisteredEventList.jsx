import React, { useEffect, useState, useContext } from "react";
import ApplyTable from "./ApplyTable";
import { AuthContext } from "../assets/AuthProvider/AuthProvider";
import useAxiosSecure from "./hooks/useAxiosSecure";

const RegisteredEventList = () => {
  const { user } = useContext(AuthContext);
  const [registration, setRegistration] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [refetch, setRefetch] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/registered?applicant=${user.email}`)
        .then((res) => {
          setRegistration(res.data);
        })
        .catch((err) => {
          if (err.response) {
            // Handle specific status codes
            if (err.response.status === 401) {
              console.error("Unauthorized: Please log in again.");
            } else if (err.response.status === 403) {
              console.error(
                "Forbidden: You do not have permission to access this resource."
              );
            } else {
              console.error("An error occurred:", err.message);
            }
          } else {
            console.error("Network error:", err.message);
          }
        });
    }
  }, [user, refetch, axiosSecure]);

  const filteredRegistrations = registration.filter((reg) =>
    reg.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-16">
      <h1 className="text-center font-serif text-3xl p-1.5 text-emerald-700">
        See Your List What you Personally have Added {registration.length}
      </h1>
      <p className="font-sans text-center pb-9 text-lg">
        Your Added List Has been given Here
      </p>
      <div className="text-center mb-4">
        <input
          type="text"
          className="input input-bordered w-1/2"
          placeholder="Search by Marathon Title..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mx-auto border">
          <thead className="text-left font-bold border-2 border-blue-800 shadow-2xs">
            <tr>
              <th className="pl-5 py-5">Title</th>
              <th>Your Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredRegistrations.map((register) => (
              <ApplyTable
                key={register._id}
                register={register}
                registration={registration}
                setRegistration={setRegistration}
                refetch={refetch}
                setRefetch={setRefetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredEventList;
