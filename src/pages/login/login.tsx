import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuthenticate } from '../../redux/actions/authAction';
import { RootState } from "../../redux/store";
import { IFormLoginRequest } from '../../api/auth/type';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
/* import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Input } from '@mui/material'; */
import { 
  StyleCheckBox, 
  LoginTimesheet, 
  Title, 
  TitleLogin, 
  MyTimesheet,
  TitleError,
  FormLogin 
} from './loginCss'
import {
    TextField,
    InputAdornment,
    FormControlLabel,
    Checkbox,
    Button
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<IFormLoginRequest>();
    const history = useHistory();
    const dispatch = useDispatch();

    const accessToken = useSelector((state: RootState) => state.auth.user.accessToken);

    const handleClickLogin = async (props: IFormLoginRequest) => {
        dispatch(
            getAuthenticate({
                userNameOrEmailAddress: props.userNameOrEmailAddress,
                password: props.password,
                rememberClient: false,
            })
        );
    };

    useEffect(() => {
        if (accessToken) {
            history.push("/app");
        }
    }, [accessToken, history]);

    const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
  return (    
      <LoginTimesheet>
        <MyTimesheet>
          <Title>Timesheet</Title>
          <FormLogin onSubmit={handleSubmit(handleClickLogin)}>
            <TitleLogin>Log in</TitleLogin>
            <Box sx={{ display: "flex", alignItems: "flex-end", width: 400 }}>
              <PersonIcon
                sx={{
                  color: "action.active",
                  mr: 0.5,
                  my: 0.5,
                  fontSize: "medium",
                }}
              />
              <TextField
                id="input-with-sx"
                label="User name *"
                variant="standard"
                InputLabelProps={{ style: { fontSize: 14 } }}
                style={{ width: "290px" }}
                size="small"
                {...register("userNameOrEmailAddress", { required: true })}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-end", width: 400 }}>
              <LockIcon
                sx={{
                  color: "action.active",
                  mr: 0.5,
                  my: 0.5,
                  fontSize: "medium",
                }}
              />
              <TextField
                id="input-with-sx"
                label="Password *"
                variant="standard"
                InputLabelProps={{ style: { fontSize: 14 } }}
                style={{ width: "290px" }}
                size="small"
                type="password"
                {...register("password", { required: true })}
              />
            </Box>
            <div style={{ display: "flex" }}>
              <StyleCheckBox>
                <Checkbox
                  style={{ textAlign: "left" }}
                  {...register("rememberClient")}
                />
                <p style={{ fontSize: 13, color: "gray", fontWeight: "400"}}>
                  Remember me
                </p>
              </StyleCheckBox>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "25%",height:"70%", textTransform: "capitalize", marginTop: "15px", marginLeft: "98px", backgroundColor: "#ff4081" }}
              >
                Login
              </Button>
            </div>

            {/* Login Google  */}
          </FormLogin>
        </MyTimesheet>
      </LoginTimesheet>
    );
};

export default Login;
