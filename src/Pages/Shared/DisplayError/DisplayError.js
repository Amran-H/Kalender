import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const error = useRouteError();
    const handleLogOut = async () => {
        await logOut();
        navigate("/login")
    }

    return (
        <div>
            <h1 className='text-red-600 text-3xl font-bold'>Something Wrong!!!</h1>
            <p className='text-red-600 text-xl font-bold'>{error.statusText || error.message}</p>
            <p>Please,   <Link
                className="md:mr-4 mr-3 hover:text-emerald-600 font-bold"
                onClick={handleLogOut}
            >
                Log Out
            </Link> and login </p>
        </div>
    );
};

export default DisplayError;