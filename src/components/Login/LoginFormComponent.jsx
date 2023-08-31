import { envRuteApi } from "../../routes/configRuteFile";
import { types } from "../../context/user/userReducer";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user/userContext";

import axios from "axios";
import jwt from "jwt-decode";

import "./LoginFormComponent.css";


export const LoginFormComponent = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [, dispatch] = useContext(UserContext);

  const navigate = useNavigate();

  const initForm = {
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initForm);

  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,

      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);

    try {
      const { data } = await axios.post(
        `${envRuteApi()}users/login`,
        formState,
        {
          headers: {
            "Context-Type": "application/json",
          },
        }
      );
      const tokenDecodificado = jwt(data.token);

      sessionStorage.setItem("user", JSON.stringify(tokenDecodificado));

      dispatch({
        type: types.setUserState,
        payload: tokenDecodificado,
      });

      window.alert("Usuario logueado");

      setIsFetching(false);

      navigate("/");
    } catch (error) {
      console.error(error);
      window.alert("Error al loguar al usuario");

      dispatch({
        type: types.setError,
        payload: error,
      });

      setIsFetching(false);
    }

    setFormState(initForm);
  };

  return (
    <>
      <div className="container-login">
        <div className="text-center">
          <h3>Inicia sesión</h3>
        </div>

        <div className="p-3">
          <form action="submit">
            <div className="form-group g-3 ">
              <label className="col-form-label mx-2" htmlFor="email">
                Dirección de correo
              </label>

              <input
                className="form-control shadow"
                name="email"
                placeholder="Escribe su correo aquí"
                type="email"
                value={formState.email}
                onChange={onChangeForm}
              />
            </div>

            <div className="form-group g-3 mt-3">
              <label className="col-form-label mx-2" htmlFor="consult">
                Clave
              </label>

              <input
                className="form-control shadow"
                name="password"
                placeholder="Escribe su clave secreta"
                type="password"
                value={formState.password}
                onChange={onChangeForm}
              />
            </div>

            <button
              className="btn btn-outline-primary d-grid col-6 mx-auto shadow mt-4"
              type="submit"
              id="contact"
              onClick={handleSubmit}
              disabled={isFetching}
            >
              {isFetching ? "Cargando..." : "Ingresar"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
