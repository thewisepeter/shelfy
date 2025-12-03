import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setProject('692456a9003dfaa2a572')
    .setEndpoint('https://fra.cloud.appwrite.io/v1');

export const account = new Account(client);
export const avatars = new Avatars(client);
