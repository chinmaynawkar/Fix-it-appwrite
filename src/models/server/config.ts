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
    .setEndpoint(env.appwrite.endpoint) 
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apiKey)
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