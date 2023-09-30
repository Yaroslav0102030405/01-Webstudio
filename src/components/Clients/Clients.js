import React from 'react';
import './Clients.scss';

import { ReactComponent as Client1 } from './../../images/svg1/client-1.svg';
import { ReactComponent as Client2 } from './../../images/svg1/client-2.svg';
import { ReactComponent as Client3 } from './../../images/svg1/client-3.svg';
import { ReactComponent as Client4 } from './../../images/svg1/client-4.svg';
import { ReactComponent as Client5 } from './../../images/svg1/client-5.svg';
import { ReactComponent as Client6 } from './../../images/svg1/client-6.svg';

const Clients = () => {
  return (
    <>
      <section class="clients">
        <div class="container">
          <h2 class="clients-title element-animation">Customers</h2>
          <ul class="clients-list element-animation">
            <li class="clients-item">
              <a class="clients-logo" href="!#">
                <Client1 />
              </a>
            </li>
            <li class="clients-item">
              <a class="clients-logo" href="!#">
                <Client2 />
              </a>
            </li>
            <li class="clients-item">
              <a class="clients-logo" href="!#">
                <Client3 />
              </a>
            </li>
            <li class="clients-item">
              <a class="clients-logo" href="!#">
                <Client4 />
              </a>
            </li>
            <li class="clients-item">
              <a class="clients-logo" href="!#">
                <Client5 />
              </a>
            </li>
            <li class="clients-item">
              <a class="clients-logo" href="!#">
                <Client6 />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Clients;
