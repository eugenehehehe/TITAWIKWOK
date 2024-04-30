import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import Home from './pages/home';
// import Shop from './pages/shop';
// import Community from './pages/community';
// import Profile from './pages/profile';
import Gallery from './Components/gallery';
import Home from './pages/home';
import Shop from './pages/shop';
import Cart from './Components/cart';

class Mains extends React.Component {
    render() {
        return (
            <Routes>
                {/* <Route exact path="/" Component={Home} />
                <Route exact path="/shop" Component={Shop} />
                <Route exact path="/community" Component={Community} />
                <Route exact path="/profile" Component={Profile} />
                <Route exact path="/gallery" Component={Gallery}></Route> */}

                <Route exact path='/' Component={Home}></Route>
                <Route exact path='/shop' Component={Shop}></Route>
                <Route exact path='/gallery' Component={Gallery}></Route>
                <Route exact path='/cart' Component={Cart}></Route>

            </Routes>
        )
    }
}

export default Mains;