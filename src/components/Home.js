import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@material-ui/core";  
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { getPlayers, deletePlayer } from "../service/api";
import useStyle from "../style";

const Home = () => {
  const classes = useStyle();
  const [team, setTeam] = useState([]);

  const removePlayer = async (id)=>{
    await deletePlayer(id);
    getTeam();
  }

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = async () => {
    const response = await getPlayers();
    // console.log(response);
    setTeam(response.data);
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.tHead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Edit / Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {team.map((player) => (
          <TableRow key={player.id}>
            <TableCell>{player.id}</TableCell>
            <TableCell>{player.name}</TableCell>
            <TableCell>{player.username}</TableCell>
            <TableCell>{player.email}</TableCell>
            <TableCell>{player.phone}</TableCell>
            <TableCell className={classes.icon}>
                <IconButton component={Link} exact to={`/edit/${player.id}`}><EditIcon /></IconButton>
                <IconButton onClick={()=>removePlayer(player.id)}><DeleteIcon /></IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Home;
