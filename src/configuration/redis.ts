import { createClient } from 'redis';
export const client = createClient({
    password: 'nrLfaj4HsXC260VadBGMwFHtHB00jhzb',
    socket: {
        host: 'redis-15945.c323.us-east-1-2.ec2.cloud.redislabs.com',
        port: 15945
    }
});


export async function connectRedic() {
    try {
      await client.connect();
      console.log("connected successfully to Redis client!!! ");
    } catch (error) {
      console.log("port app and running on port 3007");
    }
  }