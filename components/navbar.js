import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <style jsx>
        {`
          ul {
            display: flex;
          }
          ul li {
            list-style: none;
            padding: 10px;
          }
          ul li a {
            color: #aaa;
          }
        `}
      </style>
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
    </>
  );
};

export default Navbar;
