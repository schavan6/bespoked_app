import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils";
import { getAllSalesPerson } from "../../services/apis";
/**
 *
 * Display a list of salesperson.
 */
const SalesPersons = () => {
  const [salesPersonData, setSalesPersonData] = useState(null);

  useEffect(() => {
    if (!salesPersonData) {
      //make api call here. and remove mock later
      getAllSalesPerson()
        .then((resp) => {
          console.log("Success", resp);
          setSalesPersonData(resp);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, []);

  const getManagerName = (id) => {
    if (!id || id === 0) {
      return "-";
    }
    const manager = salesPersonData.find((m) => m.salesperson_id === id);

    if (manager) {
      return `${manager.first_name} ${manager.last_name}`;
    }

    return "-";
  };

  return (
    <div>
      <h2>Sales person list.</h2>
      {salesPersonData && salesPersonData.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Start Date</th>
            <th>Termination Date</th>
            <th>Manager</th>
          </thead>
          <tbody>
            {salesPersonData.map((person) => {
              return (
                <tr key={person.salesperson_id}>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                  <td>{person.address}</td>
                  <td>{person.phone}</td>
                  <td>{formatDate(person.start_date)}</td>
                  <td>{formatDate(person.end_date)}</td>
                  <td>{getManagerName(person.manager)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h5>No data to display.</h5>
      )}
    </div>
  );
};

export default SalesPersons;
