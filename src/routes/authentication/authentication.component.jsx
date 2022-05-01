// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.conponent";
import SignInForm from "../../components/sign-in form/sign-in-form.conponent";
import './authenication.styles.scss';

const Authentication = () => {
  // useEffect(() => {
  //   const getRedirectResultData = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response.user) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //     console.log(response);
  //   };
  //   getRedirectResultData();
  // }, []);



  return (
    <div className="authentication-container">
     
      <SignInForm />
   

      <SignUpForm />
    </div>
  );
};

export default Authentication;
