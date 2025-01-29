import { HashLink as Link } from "react-router-hash-link";

const NotFound = () => {
  return (
    <div className="min-h-full w-full bg-bgcol">
      <div className="flex flex-col gap-6 bg-primary px-5 py-12 text-center text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            404 - Oops! You’ve Entered the Tech Twilight Zone! 🚀🔍
          </h1>
          <p className="mx-auto max-w-3xl text-base font-bold">
            Uh-oh! It looks like the page you’re looking for has vanished into
            cyberspace. Maybe a robot took it, or it’s hiding behind a firewall.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12 px-5 py-12 text-center">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-4 text-justify">
            <h3 className="text-2xl font-bold">
              Don’t worry, we’ve got a few options for you:
            </h3>
            <ul className="text-base">
              <li>
                <strong>💡 Retrace your clicks</strong> – Maybe you took a wrong
                turn? 🤔
              </li>
              <li>
                <strong>💡 Check your Wi-Fi</strong> – Or is your internet
                playing hide and seek? 🎭
              </li>
              <li>
                <strong>💡 Buy a new gadget</strong> – Maybe a smarter device
                will find the page for you! 😆
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-justify">
            <h3 className="text-2xl font-bold">Or just...</h3>
            <ul className="text-base font-semibold text-primary">
              <Link to="/">
                <li>🔹 Beam me back to the Homepage 🚀</li>
              </Link>
              <Link to="/#gadget-section">
                <li>🔹 Explore our latest tech wonders 🛍️</li>
              </Link>
              <Link to="/">
                <li>🔹 Contact our tech wizards 🧙‍♂️</li>
              </Link>
            </ul>
          </div>
          <p className="text-justify text-base">
            Still lost? Don’t worry, even the best GPS can’t find some things!
            😜
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
