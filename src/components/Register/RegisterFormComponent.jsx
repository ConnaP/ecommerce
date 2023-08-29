import { envRuteApi } from "../../routes/configRuteFile";
import { types } from "../../context/user/userReducer";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user/userContext";

import axios from "axios";
import jwt from "jwt-decode";

import "./RegisterFormComponent.css";

export const RegisterFormComponent = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [, dispatch] = useContext(UserContext);

  const initForm = {
    username: "",

    phone: "",

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
        `${envRuteApi()}register`,
        formState,
        {
          headers: {
            "Context-Type": "application/json",
          },
        }
      );
      const tokenDecodificado = jwt(data.token);

      dispatch({
        type: types.setUserState,
        payload: tokenDecodificado,
      });

      window.alert("Registro exitoso");
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      window.alert("Error al registrar el usuario");
      dispatch({
        type: types.setError,
        payload: error,
      });
      setIsFetching(false);
    }

    addToDB(formState);

    setFormState(initForm);
  };

  const addToDB = () => {
    console.log(formState);
  };

  return (
    <>
      <div className="container-register">
        <div className="text-center">
          <h3>Registrarse</h3>
        </div>

        <form action="submit">
          <div className="form-group g-3">
            <label className="col-form-label mx-2" htmlFor="username">
              Nombre
            </label>

            <input
              className="form-control col-auto shadow"
              name="username"
              type="text"
              placeholder="Escribe su nombre completo aquí"
              value={formState.username}
              onChange={onChangeForm}
            />
          </div>

          <div className="form-group g-3 mt-3">
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
            <label className="col-form-label mx-2" htmlFor="phone">
              Numero de telefono
            </label>

            <input
              className="form-control shadow"
              name="phone"
              placeholder="Escribe su numero de telefono"
              type="number"
              value={formState.phone}
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
            className="btn btn-outline-primary d-grid col-6 mx-auto mt-4 shadow"
            type="submit"
            id="contact"
            onClick={handleSubmit}
            disabled={isFetching}
          >
            Registrase
          </button>
        </form>
      </div>
    </>
  );
};
