import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie";


export function useCurrentUser() {
  let rolesList = ["ERROR_GETTING_ROLES"];
  return useQuery("current user", async () => {
    try {
      const response = await axios.get("/api/currentUser");
      try {
        rolesList = response.data.roles.map((r) => r.authority);
      } catch (e) {
        console.error("Error getting roles: ", e);
      }
      response.data = { ...response.data, rolesList: rolesList }
      return { loggedIn: true, root: response.data };
    } catch (e) {
      console.error("Error invoking axios.get: ", e);
      return { loggedIn: false, root: null };
    }
  }, {
    initialData: { loggedIn: false, root: null, initialData: true }
  });
}



const getCookie = (name) => {
  const cookies = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));

  return cookies ? cookies.split("=")[1] : null;
};

export function useLogout() {
  const [_cookies, setCookie, _removeCookie] = useCookies(['XSRF-TOKEN']);

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(async () => {
    const csrfToken = getCookie('XSRF-TOKEN');
    console.log("csrfToken: ", csrfToken);
    const csrfResponse = await axios.get("/csrf");
    const csrfToken2 = csrfResponse.data.token;
    setCookie(csrfToken2);
    console.log("csrfToken2: ", csrfToken2);
    await axios.post("/logout");
    await queryClient.resetQueries("current user", { exact: true });
    navigate("/");
  })
  return mutation;
}

export function hasRole(currentUser, role) {

  // The following hack is because there is some bug in terms of the
  // shape of the data returned by useCurrentUser.  Is there a separate 
  // data level, or not? 

  // We will file an issue to track that down and then remove this hack



  if (currentUser == null) return false;

  if ("data" in currentUser &&
    "root" in currentUser.data &&
    currentUser.data.root != null &&
    "rolesList" in currentUser.data.root) {
    return currentUser.data.root.rolesList.includes(role);
  }

  return currentUser.root?.rolesList?.includes(role);
}