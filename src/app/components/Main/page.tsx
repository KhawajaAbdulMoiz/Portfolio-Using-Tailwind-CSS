import Link from 'next/link';

function Header() {
  return (
    <nav className="main">
      <div>

        <ul className="items flex flex-row gap-5 justify-center mt-5 font-poppins text-[21px] text-[rgb(200,233,110)]">
          <li className="hover:text-white">
            <Link href="#about">
              About
            </Link>
          </li>
          <li className="hover:text-white">
            <Link href="#portfolio">
              Portfolio
            </Link>
          </li>
          <li className="hover:text-white">
            <Link href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
