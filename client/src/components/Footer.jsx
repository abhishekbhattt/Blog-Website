import React from "react";
import { Footer, FooterLink } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap  text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Abhishek's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8  mt-5 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <FooterLink
                  href="https://github.com/abhishekbhattt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FooterLink>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <FooterLink
                  href="https://www.linkedin.com/in/abhishek-bhatt-537781232/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Instagram
                </FooterLink>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions 2024
                </FooterLink>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:item-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Abhishek-blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon
              href="https://github.com/abhishekbhattt"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/abhishek-bhatt-537781232/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
