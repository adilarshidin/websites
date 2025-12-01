import Sparkles from "./components/Sparkles";


const App = () => {
  const mainStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    padding: '2%',
    textAlign: 'center',
  };
  const imgStyles = {
    height: '300px',
    width: '300px'
  };
  const headerStyles = {
    fontFamily: "'Great Vibes', cursive",
    fontSize: "3rem",
    fontWeight: 400,
    color: "#ffffff",
    textAlign: "center",
    textShadow: "0 0 8px rgba(255, 255, 255, 0.6), 0 0 14px rgba(255, 200, 230, 0.5)",
    letterSpacing: "1px",
    background: "linear-gradient(135deg, rgba(0,0,0,0.25), rgba(255,255,255,0.15))",
    borderRadius: "14px",
    backdropFilter: "blur(3px)",
  }

  return (
    <Sparkles>
    <main style={mainStyles}>
      <img style={imgStyles} src='./src/assets/horse1.png' />
      <h2 style={headerStyles}>A mi corazon Sofia</h2>
      <img style={imgStyles} src='./src/assets/horse2.png' />
    </main>
    </Sparkles>
  );
};

export default App;
