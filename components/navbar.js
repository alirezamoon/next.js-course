import Link from "next/link";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/courses">
          <a>Courses</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
