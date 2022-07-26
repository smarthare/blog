import Link from "next/link";
import Head from "next/head";

export default function Layout({
  children,
  title = "10up Blog",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        className="site-header"
        role="banner"
        itemScope
        itemType="http://schema.org/WPHeader"
      >
        <h1
          className="site-title"
          itemScope
          itemType="http://schema.org/Organization"
        >
          10up Blog
        </h1>

        <nav
          className="site-navigation"
          role="navigation"
          itemScope
          itemType="http://schema.org/SiteNavigationElement"
        >
          <a
            href="#menu-main-nav"
            id="js-menu-toggle"
            className="site-menu-toggle"
          >
            <span className="screen-reader-text">Primary Menu</span>
            <span aria-hidden="true">☰</span>
          </a>

          <ul id="menu-main-nav" className="primary-menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>

            <li className="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>

            <li className="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  );
}
