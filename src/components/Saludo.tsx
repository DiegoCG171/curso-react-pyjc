
interface Props {
    name: string;
    email: string;
}


export const Saludo = ({name, email}: Props) => {

    return <h1>Hola en { name } con email { email }!</h1>
}