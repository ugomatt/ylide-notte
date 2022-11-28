import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { CodeIcon } from "@heroicons/react/solid";

const SiteFooter = ({}) => {
  return (
    <footer className="site-footer">
      <div className="wrapper">
        <header className="footer-header">
          <div className="logo-cont">
            <figure className="site-logo">
              <Link href={`/`} passHref={true}>
                Ylide Nottes
              </Link>
            </figure>
            <p>
              Built on{" "}
              <a
                href="https://ylide.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://ylide.io/images/logo-medium-p-500.png"
                  alt="Logo"
                  width={50}
                  height={27.1}
                />
              </a>
            </p>
          </div>

          <nav className="site-footer-nav">
            <ul className="links">
              <li className="link">
                <a href="#" onClick={() => signIn()}>
                  Connect wallets
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <p className="text-sm mt-8">
          {" "}
          &copy; Copyright 2022 Ylide Nottes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
