import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise]).then(([photoData, userData]) => {
    console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
  }).catch(() => new Error('Signup system offline'));
}

export default handleProfileSignup;
