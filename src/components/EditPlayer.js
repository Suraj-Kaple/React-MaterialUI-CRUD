import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import useStyle from "../style";
import { getPlayers, editPlayer } from "../service/api";
import { useHistory, useParams } from "react-router";

const EditPlayer = () => {
  const classes = useStyle();
  const history = useHistory();
  const [player, setPlayer] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPlayer();
  }, []);

  const loadPlayer = async () => {
        const response = await getPlayers(id)
        setPlayer(response.data);
  }

  const editInTeam = async () => {
    await editPlayer(id, player);
    history.push("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayer({
      ...player,
      [name]: value,
    });
  };

  return (
    <FormGroup className={classes.form}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Edit player details
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
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          type="email"
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
        onClick={() => editInTeam(player)}
        variant="contained"
        className={classes.button}
      >
        Edit Player
      </Button>
    </FormGroup>
  );
};

export default EditPlayer;
