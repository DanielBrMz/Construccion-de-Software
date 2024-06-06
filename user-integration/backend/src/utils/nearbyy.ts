import { NearbyyClient } from "@nearbyy/core";
import dotenv from "dotenv";
dotenv.config();

export const nearbyy = new NearbyyClient({
  API_KEY: process.env.NEARBYY_API_KEY!,
});
 
