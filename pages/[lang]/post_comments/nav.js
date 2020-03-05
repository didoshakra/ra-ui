//create-next-app-examples
import React from "react";
import Link from "next/link";

const links = [
  { href: "/write", label: "Write" },
  // { href="/", label: 'Posts ({this.props.posts.length})' },
  { href: "/", label: "Posts" },
  // { href="/comments", label: 'Comments ({this.props.comments.length})' },
  { href: "/comments", label: "Comments" },
  // { href="/users", label: 'Users ({this.props.users.length})' },
  { href: "/users", label: "Users" }
  // { href: "/users", label: "Log out" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const handleLogout = () => {
  console.log("+++ /post_cmments/handleLogout");
  this.props.dispatch(Actions.requestLogout());
};
const LogOut_Button = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={handleLogout} ref={ref}>
      Log out
    </a>
  );
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
      <li>
        <Link href="/about" passHref>
          <LogOut_Button />
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        //justify-content:Властивість вирівнює елементи по головні осі поточної лінії контейнера.
        // justify-content: space-between;//рівномірно по всій ширині
        // justify-content: flex-start; //спочатку
        justify-content: center; //по центру
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
