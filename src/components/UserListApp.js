import React, { useEffect, useState } from 'react'

import { Button, Modal, Form } from 'react-bootstrap'

import { UserCard } from './UserCard'

export const UserListApp = () => {

    const [users, setUsers] = useState([]);

    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const [editUser, setEdit] = useState({ id: 0, name: '', lastname: '', email: '' });
    const [newUser, setNewUser] = useState({ id: 0, name: '', lastname: '', email: '' });


    const getUsersFetch = async () => {
        const res = await fetch('https://randomuser.me/api/?inc=email,name&results=20');
        const { results } = await res.json();

        let aux = results.map(user => {
            let rand = Math.random() * 999999;
            return {
                id: rand,
                name: user.name.first,
                lastname: user.name.last,
                email: user.email,
            }
        });

        setUsers(aux);

    }

    useEffect(() => {
        return getUsersFetch();
    }, []);

    ////////////////////////////////////////////////////////////
    // MODAL THINGS
    ////////////////////////////////////////////////////////////

    // MODAL NEW CONTROL
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // MODAL EDIT CONTROL
    const handleEditClose = () => setShowEdit(false);
    const handleEditShow = () => setShowEdit(true);

    ////////////////////////////////////////////////////////////
    // CREATE NEW USER
    ////////////////////////////////////////////////////////////

    // NEW USER INPUT HANDLE
    const newUserHandle = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    };

    // CREATE NEW USER SUBMIT
    const createNewUser = () => {
        let rand = Math.random() * 999999;
        setNewUser({ ...newUser, id: rand })
        setUsers([newUser, ...users]);
        handleClose();
        console.log(users)
    };

    ////////////////////////////////////////////////////////////
    // REMOVE USER
    ////////////////////////////////////////////////////////////

    //REMOVE USER
    const removeUser = (a, b) => {
        let confirm = window.confirm('¿Está seguro de que desea eliminar a ' + b + '?');

        if (confirm) {
            setUsers((users) => {
                return users.filter(user => user.id !== a);
            })
        }
    }


    //////////////////////////////////////////////////////////////////////////////
    // EDIT USER INPUT HANDLE
    /////////////////////////////////////////////////////////////////////////////

    //OPEN MODAL WITH USER
    const editUserHandle = (a) => {
        let aux = users.filter(user => user.id === a);
        setEdit(aux[0]);
        handleEditShow();
    }

    //HANDLE INPUTS CHANGES
    const editModal = (e) => {
        setEdit({ ...editUser, [e.target.name]: e.target.value })
    };

    //SUBMIT EDIT USER
    const editUserSubmit = (a) => {
        users.map(user => {
            if (user.id === a) {
                user.name = editUser.name;
                user.lastname = editUser.lastname;
                user.email = editUser.email;
            }
        })

        handleEditClose();
    };


    return (
        <div>
            <div className="d-flex">
                <Button variant="success" className="ms-auto" onClick={handleShow}>Crear usuario</Button>
            </div>
            <div className="py-3 row g-3">
                {users.map(user => <UserCard key={user.id} user={user} removeUser={removeUser} editUser={editUserHandle} />)}
            </div>


            {/* MODAL NEW USER */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Nuevo usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Nombre" value={newUser.name} onChange={newUserHandle} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" name="lastname" placeholder="Apellidos" value={newUser.lastname} onChange={newUserHandle} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="E-Mail" value={newUser.email} onChange={newUserHandle} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={createNewUser}>
                        Guardar
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* MODAL EDIT USER */}
            <Modal show={showEdit} onHide={handleEditClose}>
                <Modal.Header>
                    <Modal.Title>Nuevo usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Nombre" value={editUser.name} onChange={editModal} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" name="lastname" placeholder="Apellidos" value={editUser.lastname} onChange={editModal} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="E-Mail" value={editUser.email} onChange={editModal} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => editUserSubmit(editUser.id)}>
                        Guardar
                    </Button>
                    <Button variant="danger" onClick={handleEditClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
