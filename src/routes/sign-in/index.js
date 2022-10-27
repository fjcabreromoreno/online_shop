import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sig In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google </button>
    </div>
  );
}

export default SignIn;
