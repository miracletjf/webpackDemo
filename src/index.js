// import _ from 'lodash';


async function getComponent() {
  try {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element
  } catch (error) {
    return 'An error occurred while loading the component'
  }
}

getComponent().then(component => {
  document.body.appendChild(component());
})

