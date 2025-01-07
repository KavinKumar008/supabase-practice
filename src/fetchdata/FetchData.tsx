import { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";
import { User } from "../Type";

const FetchData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  console.log(supabase);

  const fetchUsers = async () => {
    const newRecord = {
      bname: "discover",
      bcolor: "black",
      bprice: 100000,
    };
    const { data, error } = await supabase.from("bike").select("*");
    console.log("Data:", data, "Error:", error);
    if (error) {
      setError(error.message);
    } else {
      setUsers(data);
    }
  };
  useEffect(() => {
    fetchUsers();
    console.log("hiii");
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>Error:{error}</p>}
      <ul>
        {users.map((item) => (
          // <div key={item.id}>
          //   <li>{item.name}</li>
          //   <li>{item.email}</li>
          // </div>
          <div key={item.id}>
            <li>{item.id}</li>
            <li>{item.bname}</li>
            <li>{item.bcolor}</li>
            <li>{item.bprice}</li>
            <li>{item.btype}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
