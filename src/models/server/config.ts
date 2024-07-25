import env from "@/app/env";
import {
  Avatars, 
  Databases, 
  Storage, 
  Account, 
  Client,
  Users
} from "node-appwrite";

let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID
    .setKey(env.appwrite.apiKey) // Your secret API key
;

const database = new Databases(client);
    const storage = new Storage(client);
    const avatars = new Avatars(client);
    const account = new Account(client);
    const users = new Users(client);

    export { 
      client, 
      database, 
      storage, 
      avatars, 
      account,
      users
    };