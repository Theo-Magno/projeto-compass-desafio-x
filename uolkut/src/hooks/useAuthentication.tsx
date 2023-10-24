import { app, db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth(app);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  //registrar
  const createUser = async (data: {
    email: string;
    password: string;
    displayName: string;
  }) => {
    checkIfIsCancelled();

    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);
      return user;
    } catch (error: any) {
      console.log(error.message);
      console.log(typeof error.message);

      let SystemErrorMessage;

      if (error.message.includes("Password")) {
        SystemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        SystemErrorMessage = "E-mail já cadastrado.";
      } else {
        SystemErrorMessage = "Ocorreu um erro, tente mais tarde";
      }
      setError(SystemErrorMessage);
    }
    setLoading(false);
  };

  //login
  const login = async (data: { email: string; password: string }) => {
    checkIfIsCancelled();

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error: any) {
      let SystemErrorMessage;

      if (error.message.includes("user-not-found")) {
        SystemErrorMessage = "Usuário não encontrado.";
      } else if (error.message.includes("wrong-password")) {
        SystemErrorMessage = "Senha incorreta";
      } else {
        SystemErrorMessage = "Ocorreu um erro, tente mais tarde";
      }
      setError(SystemErrorMessage);
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { auth, createUser, error, loading, login };
};
