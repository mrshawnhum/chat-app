import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

export const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1>
        Live Chat
        <br />
        Application
      </h1>
      <h2>
        This was created by
        <br />
        Shawn Humphreys
        <br />
        using React, Express,
        <br />
        Node, and Socket.io
      </h2>
    </div>
    {users ? (
      <div>
        <h1>Users chatting</h1>
        <div className='activeContainer'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                {name}
                <img alt='Online Icon' src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);
