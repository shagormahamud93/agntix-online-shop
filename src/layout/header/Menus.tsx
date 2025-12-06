
import menu_data from '@/src/data/menu-data';
import Link from 'next/link';

const Menus = () => {
  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li key={i}>
          <Link href={menu.link}>
            {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menus;