import NavLink from "../navLink";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];
const Links = () => {
  const session = true;
  const isAdmin = true;
  return (
    <div className="flex items-center gap-[10px]">
      {links?.map((link) => {
        return <NavLink link={link} key={link.path} />;
      })}
      {session ? (
        <>
          {isAdmin ? (
            <NavLink link={{ title: "Admin", path: "/admin" }} />
          ) : null}
          <button className="p-2.5 cursor-pointer font-bold bg-gray-600 rounded" type="button">Logout</button>
        </>
      ) : (
        <NavLink link={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
