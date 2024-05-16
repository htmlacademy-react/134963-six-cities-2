import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

interface HeaderProps {
  showNavigation: boolean;
}

function Header({ showNavigation }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {showNavigation && <Navigation />}
        </div>
      </div>
    </header>
  );
}

export default Header;
