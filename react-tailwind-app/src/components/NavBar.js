import React, { useState } from 'react';

//Before login navbar
function GuestNavbar() {
    return (
        <nav class="bg-black border-gray-300 border-b-2">
            <div class="flex items-center justify-between mx-10 p-4 text-white">
                <div>
                    <button class="text-white hover:text-gray-200">[Title]</button>
                </div>
                <div>
                    <ul class="flex">
                        <li><button class="ml-6 text-white hover:text-gray-200">Sign in</button></li>
                        <li><button class="ml-6 text-white hover:text-gray-200">Sign up</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

//After login navbar
function UserNavbar() {
    // Use state to set and display username
    const [username, setUsername] = useState('');

    // Code goes here

  return (
      <nav class="bg-black border-gray-300 border-b-2">
          <div class="flex items-center justify-between mx-10 p-4 text-white">
              <div>
                  <button class="text-white hover:text-gray-200">[Title]</button>
              </div>
              <div>
                  <ul class="flex">
                      <li><button class="ml-6 text-white hover:text-gray-200">Home</button></li>
                      <li><button class="ml-6 text-white hover:text-gray-200">Order</button></li>
                      <li><button class="ml-6 text-white hover:text-gray-200">Scoreboard</button></li>
                      <li><button class="ml-6 text-white hover:text-gray-200">{username ? username : '[Username]'}</button></li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}

//During signing in/up navbar
function AuthNavbar() {
    return (
        <nav class="bg-black border-gray-300 border-b-2">
            <div class="flex items-center justify-between mx-10 p-4 text-white">
                    <button class="text-white hover:text-gray-200">[Title]</button>
            </div>
        </nav>
    );
}


export { GuestNavbar, UserNavbar, AuthNavbar };
