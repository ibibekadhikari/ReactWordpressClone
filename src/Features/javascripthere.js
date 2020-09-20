const clickhere = () => {
    alert("Hello world");
}

function onclickhere() {
setTimeout(() => {
    clickhere();
}, 5000);
}

export default onclickhere;