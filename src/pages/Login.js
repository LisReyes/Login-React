import Header from "../components/Header"
import Login from "../components/Login"

export default function LoginPage(){
    return(
        <>
             <Header
                heading="Bienvenido Ingresa a tu cuenta"
                paragraph="Crear cuenta"
                linkName=" Crear"
                linkUrl="/signup"
                />
            <Login/>
        </>
    )
}