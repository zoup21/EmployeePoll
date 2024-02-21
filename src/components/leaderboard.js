import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";




const Leaderboard = () => {
    const users = useSelector((state) => state.users.users)
    
    

    const compareUsers = (userA, userB) => {
        const userASum = Object.keys(userA.answers).length + userA.questions.length;
        const userBSum = Object.keys(userB.answers).length + userB.questions.length;
        return userBSum - userASum; // Sort in descending order
      };

      const sortedUsers = Object.values(users).sort(compareUsers);
    



    return(
        <>
        <h3>Leaderboard</h3>
        <table>
      <thead>
        <tr>
            <th>Avatar</th>
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(sortedUsers).map((user) => (
          <tr key={user.id}>
            <td><Avatar src={user.avatarURL} /></td>
            <td>{user.name}</td>
            <td>{Object.keys(user.answers).length}</td>
            <td>{user.questions?.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </>
    )

}





export default Leaderboard;