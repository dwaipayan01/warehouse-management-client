import React from 'react';
import Button from 'react-bootstrap/Button';
import "./SocialLogin.css";
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const handleGoogle = () => {
        signInWithGoogle();
    }
    const handleGithub = () => {
        signInWithGithub();
    }
    let errorHandle;
    if (error || error1) {
        errorHandle = <p className="text-danger text-center">{error?.message} {error1?.message}</p>
    }
    if (loading1 || loading) {
        return <p><Loading></Loading></p>
    }

    if (user || user1) {
        navigate("/home");
    }
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>

            <div>
                <Button onClick={handleGoogle} className="w-50 area rounded-pill" variant="outline-dark"><FcGoogle></FcGoogle> Google Sign in</Button>{' '}
                <Button onClick={handleGithub} className="w-50 area rounded-pill mt-3 mb-2" variant="outline-dark"><ImGithub></ImGithub> Github Sign in</Button>{' '}
                {errorHandle}
            </div>

        </div>
    );
};

export default SocialLogin;