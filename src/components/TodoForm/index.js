import {Form} from "./todoForm.styled";
export default function TodoForm(props){
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return(
        <Form theme={} onSubmit={e => handleSubmit(e)}>

        </Form>
    );
}