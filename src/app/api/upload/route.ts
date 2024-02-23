import { UploadFile } from '@/lib/actions';
import { UploadToGcs } from '@/lib/storage';

export async function POST(req: Request) {
  const form = await req.formData();
  // Is it bad/wrong to just use a server action here?
  // await UploadFile(form);

  
  // Calling a non-server action method to upload the file:
  const file = form.get('file') as File;
  const success = await UploadToGcs(file);

  return Response.json({success: success});
}