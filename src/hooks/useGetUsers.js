import axios from "axios";
import { useState, useEffect } from "react";
import global from "../global";

export default function useGetUsers() {
  const [user, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const user = await axios.get(`${global.api}/user`);
      setUsers(user.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return [user, isLoading];
}
