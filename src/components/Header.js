import PropTypes from "prop-types";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Atraskite savo čempioną",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
