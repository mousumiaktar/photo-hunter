import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container'>
            <h2>Difference between authorization and authentication</h2>
            <div className='blog-container'>
                <div>
                    <h3>Authentication</h3>
                    <ul>
                        <li>
                        In authentication process, the identity of users are checked for providing the access to the system.
                        </li>
                        <li>
                        In authentication process, users or persons are verified
                        </li>
                        <li>
                        It is done before the authorization process.
                        </li>
                        <li>
                        It needs usually users login details.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Authorization</h3>
                    <ul>
                        <li>
                        While in authorization process, persons or users authorities are checked for accessing the resources
                        </li>
                        <li>
                        While in this process, users or persons are validated.
                        </li>
                        <li>
                        While this process is done after the authentication process.
                        </li>
                        <li>
                        While it needs users privilege or security levels.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;