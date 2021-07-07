import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import useStyle from "../style";
import { addPlayer } from "../service/api";
import { useHistory } from "react-router";

const AddPlayer = () => {
  const classes = useStyle();
  const history = useHistory();
  const [player, setPlayer] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const addToTeam = async () => {
    await addPlayer(player);
    history.push("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setPlayer({
      ...player,
      [name]: value,
    });
  };

  return (
    <FormGroup className={classes.form}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Add player details
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          name="name"
          value={player.name}
          onChange={(event) => handleChange(event)}
        />
        {/* value filed is there by default */}
      </FormControl>
      <FormControl>
        <InputLabel>Userame</InputLabel>
        <Input
          name="username"
          value={player.username}
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
      <FormControl type="email">
        <InputLabel>Email</InputLabel>
        <Input
          name="email"
          value={player.email}
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          name="phone"
          value={player.phone}
          onChange={(event) => handleChange(event)}
        />
      </FormControl>
      <Button
        onClick={() => addToTeam(player)}
        variant="contained"
        className={classes.button}
      >
        Add Player
      </Button>
    </FormGroup>
  );
};

export default AddPlayer;
