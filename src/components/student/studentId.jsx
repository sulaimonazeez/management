import React from "react";
import profiles from "./1691413082957.jpg";
import "./coustom.css";
const StudentId = () => {
    //assuming this a data from our api
    const studentData = [
        {"id":"PRE209","name":"sulaimon", "mark":"11151","percentage":"93%","year":"2013"},
        {"id":"PRE205","name":"azeez", "mark":"11141","percentage":"95%","year":"2013"},
        {"id":"PRE206","name":"alani", "mark":"11181","percentage":"90%","year":"2013"},
        {"id":"PRE207","name":"olaniyi", "mark":"11131","percentage":"93%","year":"2013"},
        {"id":"PRE208","name":"abdulazeez", "mark":"11181","percentage":"96%","year":"2013"},
        {"id":"PRE202","name":"afolabi", "mark":"11191","percentage":"97%","year":"2013"},
        {"id":"PRE204","name":"olorunishola", "mark":"11171","percentage":"97%","year":"2013"}
    ]
    return (
        <table className="table">
             <thead>
               <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Mark</th>
                 <th>Percentage</th>
                 <th>Year</th>
               </tr>
             </thead>
             <tbody>
               {studentData.map(data => {
                return (
                 <tr className="secondary tb-data">
                    <td>{data.id}</td>
                    <td className="profile-flex"><img src={profiles} alt="profile" className="top-student"/> <span>{data.name}</span></td>
                    <td>{data.mark}</td>
                    <td>{data.percentage}</td>
                    <td>{data.year}</td>
                 </tr>
                )
               })}
             </tbody>
           </table>
    )
}

export default StudentId;