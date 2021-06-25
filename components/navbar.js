import Link from "next/link";
import styles from './navbar.module.css'

const Navbar = () => {
  return (

      <ul className={styles.navbarList}>
        <li className={styles.listItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/courses">
            <a>Courses</a>
          </Link>
        </li>
      </ul>
  );
};

export default Navbar;
