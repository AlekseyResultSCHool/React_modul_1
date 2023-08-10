import logo from './logo.svg';
import './App.css';

// // ну тут наверное все декларативное, html теги, получение года, переход по ссылке

export function App() {
    function currYear() {
        let pYear = document.createElement('p');
        pYear.innerHTML = new Date().getFullYear();
        document.querySelector('.App-header').append(pYear);
        return pYear;
    }

    function setcreateElement() {
        let div = document.createElement('div');
        div.className = 'App';
        document.body.append(div);
    
        let header = document.createElement('header');
        header.className = 'App-header';
        div.append(header);

        let img = document.createElement('img');
        img.src = `${logo}`;
        img.className = 'App-logo';
        img.alt = 'logo';
  
        let p = document.createElement('p');
        p.innerHTML = 'Edit <code>src/App.js</code> and save to reload.';

        let a = document.createElement('a');
        a.className = 'App-link';
        a.href = 'https://reactjs.org';
        a.textContent = 'Learn React';

        header.append(img, p, a, currYear());
    }

    return (
        <>
            {setcreateElement()}
        </>
    );
}


