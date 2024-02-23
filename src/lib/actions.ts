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