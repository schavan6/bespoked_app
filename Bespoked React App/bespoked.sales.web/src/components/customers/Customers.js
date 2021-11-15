import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils";
import { getAllCustomers } from "../../services/apis";
/**
 *
 * Displays a list of customers
 */
const Customers = () => {
  const [customersData, setcustomersData] = useState(null);

  useEffect(() => {
    if (!customersData) {
      getAllCustomers()
        .then((resp) => {
          console.log("Success", resp);
          setcustomersData(resp);
        })
        .catch((error) => {
          console.log("Error", error);
        });
      //make api call here. and remove mock later
      //setcustomersData([...customers]);
    }
  }, []);
  return (
    <div>
      <h2>Customer List</h2>
      {customersData && customersData.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Start Date</th>
          </thead>
          <tbody>
            {customersData.map((customer) => {
              return (
                <tr key={customer.customer_id}>
                  <td>{customer.first_name}</td>
                  <td>{customer.last_name}</td>
                  <td>{customer.address}</td>
                  <td>{customer.phone}</td>
                  <td>{formatDate(customer.start_date)}</td>
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

export default Customers;
