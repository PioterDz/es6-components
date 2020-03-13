import initMd from 'markdown-element';

// import main from './github/index';
import startGame from './game/index';
import startJoke from './joke/index';
import initBlog from './blog/index';
import initInfo from './about-me/index';

initInfo();
initBlog();

window.controls = {
    startGame,
    startJoke
};












