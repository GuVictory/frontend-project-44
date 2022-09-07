const actions = ['*', '+', '-'];

const randomAction = () => actions[Math.floor(Math.random() * actions.length)];

export default randomAction;
