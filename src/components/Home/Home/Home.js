import React from 'react';
import Feedback from '../Feedback/Feedback';
import NavArea from '../NavArea/NavArea';
import NavAreaTwo from '../NavAreaTwo/NavAreaTwo';

const Home = () => {
    return (
        <div>
            <NavArea></NavArea>
            <NavAreaTwo></NavAreaTwo>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;