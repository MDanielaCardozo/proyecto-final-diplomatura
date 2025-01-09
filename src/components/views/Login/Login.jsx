import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const userAdmin = {
    email: 'admin@admin.com',
    password: 'admin'
}

const loginUser = (user) => {
    if (user.email === userAdmin.email && user.password === userAdmin.password) {
        sessionStorage.setItem('userKey', JSON.stringify(userAdmin.email));
        return true;
    } else {
        return false;
    }
}

const Login = ({ setLogged }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const navigation = useNavigate();

    const onSubmit = (user) => {
        if (loginUser(user)) {
            setLogged(user.email);
            alert('Biendvenido');
            navigation('/');
        } else {
            alert('Usuario o contraseña incorrectos');
            reset();
        }
}

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-center'>Iniciar Sesión</Card.Title>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='email'
                                        placeholder='Ingrese su email'
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && <Form.Text className='text-danger'>Este campo es obligatorio</Form.Text>}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder='Ingrese su contraseña'
                                        {...register('password', { required: true })}
                                    />
                                    {errors.password && <Form.Text className='text-danger'>Este campo es obligatorio</Form.Text>}
                                </Form.Group>
                                <Button type='submit' variant='primary' className='w-100'>Ingresar</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}