import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Grid layout for footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              This is a simple website built using Appwrite and React. We
              provide high-quality services and solutions to our clients
              worldwide. Your satisfaction is our priority.
            </p>
          </div>

          {/* Section 2: Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/all-posts" className="hover:underline">
                  All Posts
                </a>
              </li>
              <li className="mb-2">
                <a href="/add-post" className="hover:underline">
                  Add Post
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul>
              <li className="mb-2">Email: lepharamchiary@gmail.com</li>
              <li className="mb-2">Phone: +91 9101318307</li>
              <li className="mb-2">Address: Gogamukh,Dhemaji(Assam)</li>
            </ul>
          </div>

          {/* Section 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex flex-col">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/lepharam-ramchiary-576282215"
                className="text-gray-300 hover:text-white"
              >
                <i>LinkedIn</i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LepharamRamchiary"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-twitter">GitHub</i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
