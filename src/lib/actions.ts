'use server';

import { Storage } from '@google-cloud/storage';
import { UploadToGcs } from './storage';

export const UploadFile = async (form: FormData) => {
  try {  
    const file = form.get('file') as File;
    await UploadToGcs(file);
  } catch (error) {
    console.error(error);
    return false;
  }
}




export const GetSignedUrl = async (fileName: string) => {
  // I am not including the key in the github repo, but this key goes in the root of the project.
  const storage = new Storage({ keyFilename: 'storage-demo-key.json'});

  const [url] = await storage.bucket('scriptbytes-storagedemo')
    .file(fileName)
    .getSignedUrl(
      { 
        action: 'write', 
        version: 'v4',
        expires: Date.now() + 15 * 60 * 1000,
        contentType: 'application/octet-stream',
      }
    );

  return url;
}


// Example of how to run CORS from code - if needed
export const SetCors = async () => {
  const storage = new Storage({ keyFilename: 'storage-demo-key.json' });
  await storage.bucket('scriptbytes-storagedemo').setCorsConfiguration([
    {
      maxAgeSeconds: 3600,
      method: ['GET', 'PUT'],
      origin: ['*'],
      responseHeader: ['Content-Type'],
    },
  ]);
}