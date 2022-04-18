import React from 'react';
import photography from '../../images/Wedding-img/photoframe.png';
import './Singlepage.css';

const Singlepage = () => {
    return (
        <div className='container'>
            <div className='singlepage-container'>
                <div>
                    <h3>My Approach.</h3>
                    <p>Although Im based in London, Im not only a London wedding photographer - Ive worked all over the UK, and even abroad. Variety is the spice of life, particularly in wedding photography, and I love working wherever my job takes me.

                        Having said that, every wedding is unique, no matter where they take place, and I am passionate about finding and documenting - in the most creative way possible - the true and natural stories at each one through the magic of wedding photography.
                        I might mainly take a reportage approach to photographing weddings, but I am also passionate about portraits and think its 100% worth taking the time for some creative, non-cringe portraits on your wedding.

                        Whether you are looking for a London wedding photographer, or you are getting married anywhere else, why not check out my portfolio & galleries, and feel free to get in touch!
                    </p>
                </div>

                <div>
                    <img src={photography} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Singlepage;