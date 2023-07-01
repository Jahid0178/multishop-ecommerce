import { AuthData } from "@/libs/types/types";
import bcrypt from "bcrypt";

const handleAuth = async ({ name, email, password, endPoint }: AuthData) => {
  let data: any = {};
  if (name === undefined) {
    if (password === undefined) {
      data.email = email;
    } else {
      data.email = email;
      data.password = password;
    }
  } else if (password === undefined) {
    data.name = name;
    data.email = email;
  } else {
    data.name = name;
    data.email = email;
    data.password = password;
  }

  console.log(data);
  try {
    const response = await fetch(`http://localhost:3000/api/auth/${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Sign up failed");
    }

    // Handle the response as needed
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};
export default handleAuth;

//PASSWORD HASH

// const saltRounds = 10;

export const hashPassword = async (password: string, saltRounds: number) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(password, hashedPassword);
};
