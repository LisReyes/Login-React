import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Registrate aqui"
              paragraph="Ya tengo cuenta"
              linkName=" Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}