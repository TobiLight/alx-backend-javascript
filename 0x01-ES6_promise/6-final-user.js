import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then(([userData, photoData]) => [
      {
        status: userData.status,
        value: userData,
      },
      {
        status: photoData.status,
        value: photoData,
      },
    ]);
}
