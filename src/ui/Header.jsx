import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import LinkButton from "./LinkButton";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <LinkButton to="/" className="tracking-wildest">
        Fast React Pizza Co.
      </LinkButton>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
