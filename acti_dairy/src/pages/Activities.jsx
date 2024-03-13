import React, { useState } from "react";
import CustomDropdown from "../components/Dropdown";

function ActivityTable() {
  // Static activities data for testing
  const [activities, setActivities] = useState([
    { id: 1, title: "Task 1", deadline: "2024-03-15", status: "" },
    { id: 2, title: "Task 2", deadline: "2024-03-16", status: "" },
    { id: 3, title: "Task 3", deadline: "2024-03-17", status: "" },
  ]);

  const handleActionChange = (activityId, action) => {
    // Update activity status based on action (completed or cancelled)
    // This is where you would typically send a request to update the activity status in the backend
    console.log(`Activity ${activityId} action: ${action}`);
    // Update the state to reflect the change
    const updatedActivities = activities.map((activity) => {
      if (activity.id === activityId) {
        return { ...activity, status: action };
      }
      return activity;
    });
    setActivities(updatedActivities);
  };

  return (
    <div className="container mt-5">
      <h2>Activity Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.title}</td>
              <td>{activity.deadline}</td>
              <td>
                {new Date(activity.deadline) > new Date()
                  ? "In Progress"
                  : "Pending"}
              </td>
              {/* <td>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id={`dropdownMenuButton-${activity.id}`}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Action
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby={`dropdownMenuButton-${activity.id}`}
                  >
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleActionChange(activity.id, "completed")
                      }
                    >
                      Completed
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleActionChange(activity.id, "cancelled")
                      }
                    >
                      Cancelled
                    </button>
                  </div>
                </div>
              </td> */}
              <td>
                <CustomDropdown
                  options={["Completed", "Cancelled"]}
                  onSelect={(action) => handleActionChange(activity.id, action)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivityTable;

// import React, { useState, useEffect } from 'react';

// function ActivityTable() {
//   const [activities, setActivities] = useState([]);

//   // Assume activities data comes from backend API
//   useEffect(() => {
//     // Fetch activities data from backend API
//     // Replace this with your actual API call
//     const fetchData = async () => {
//       try {
//         // Example API call using fetch
//         const response = await fetch('your-backend-api-url');
//         const data = await response.json();
//         setActivities(data);
//       } catch (error) {
//         console.error('Error fetching activities:', error);
//       }
//     };

//     // Call fetchData function
//     fetchData();
//   }, []);

//   const handleActionChange = (activityId, action) => {
//     // Update activity status based on action (completed or cancelled)
//     // This is where you would typically send a request to update the activity status in the backend
//     console.log(`Activity ${activityId} action: ${action}`);
//     // Update the state to reflect the change
//     const updatedActivities = activities.map(activity => {
//       if (activity.id === activityId) {
//         return { ...activity, status: action };
//       }
//       return activity;
//     });
//     setActivities(updatedActivities);
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Activity Table</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Deadline</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {activities.map(activity => (
//             <tr key={activity.id}>
//               <td>{activity.title}</td>
//               <td>{activity.deadline}</td>
//               <td>{new Date(activity.deadline) > new Date() ? 'In Progress' : 'Pending'}</td>
//               <td>
//                 <div className="dropdown">
//                   <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdownMenuButton-${activity.id}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Action
//                   </button>
//                   <div className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${activity.id}`}>
//                     <button className="dropdown-item" onClick={() => handleActionChange(activity.id, 'completed')}>Completed</button>
//                     <button className="dropdown-item" onClick={() => handleActionChange(activity.id, 'cancelled')}>Cancelled</button>
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ActivityTable;
