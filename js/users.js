const users = ['Ankit', 'Lavish', 'Muskan', 'Rahul', 'Shreya'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        console.log(curElem);
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${curElem}</span></button>
        `);
    })
};

addIcon.addEventListener('click', () => {
    let userName = prompt('please enter your name');

    if (userName != null && userName.length != 0 && !users.includes(userName)) {
        users.unshift(userName);
        // users.push(userName);

        console.log(users);

        console.log(users);
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${userName}</span></button>
        `);
    } else if (userName.length == 0) {
        alert('username is empty')
    }
    else {
        alert('username already exist');
    }
})


userIcons();
