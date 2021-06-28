import React from 'react'

export const UserCard = ({ user, removeUser, editUser }) => {

    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card card-width">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{user.name} {user.lastname}</h5>
                    <p className="card-text">{user.email}</p>
                    <div className="d-flex">
                        <button className="btn btn-primary me-auto" onClick={() => editUser(user.id)}>Editar</button>
                        <button className="btn btn-danger ms-auto" onClick={() => removeUser(user.id, user.name)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
