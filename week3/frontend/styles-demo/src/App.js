import './styles.css';
import styles from './styles.module.css';

const App = () => {
  const headingStyle = {
 color: 'blue',
 fontSize: '24px',
 textAlign: 'center',
  };

  return (
 <div>
    <h1 style={headingStyle}>Inline Styles</h1>
    <p style={{ color: 'green' }}>This is a green paragraph.</p>
    <div>
      <h1 className="external-heading">External CSS Styles</h1>
    </div>
    <div>
      <h1 className={styles.moduleHeading}>CSS Modules</h1>
    </div>
 </div>
  );
};

export default App;