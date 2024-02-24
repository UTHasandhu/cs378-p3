import './App.css';
import MenuItem from './components/MenuItem';
import TitleComponent from './components/TitleComponent';
import SubtitleComponent from './components/SubtitleComponent';
import menuItems from './menuData';

function App() {
    return (
        <div className="container">
            <TitleComponent />
            <SubtitleComponent />
            <div className="row">
                {menuItems.map(item => (
                    <div className="col-md-6" key={item.id}>
                        <MenuItem 
                            title={item.title} 
                            description={item.description} 
                            imageName={item.imageName} 
                            price={item.price} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
