import axios from "axios";
import { useState, useEffect } from "react";
export const EmployeeList = () => {
    const [emp, setEmp] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = () => {
        axios
          .get("http://localhost:8080/employee")
          .then((d) => setEmp(d.data));
      };
    
    return (
        <div className='list_container'>
          {/* On clicking this card anywhere, user goes to user details */}
          {emp.map((e) => (
            <div
              
              className='employee_card'
            >
              <img className='employee_image' src={e.image} />
              <br />
              <span className='employee_name'>{e.employee_name}</span>
              <br />
              <span className='employee_title'>{e.title}</span>
            </div>
          ))}
        </div>
      );
  };