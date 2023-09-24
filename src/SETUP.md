
# Install BootstrapReact
1. run this command
```batch
npm install react-bootstrap bootstrap
```
2. put the style in the `index.jsx` or `index.tsx`

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
3. use bootstrap components by using tags starting by a capital letter
```jsx
import { Button } from 'react-bootstrap';
...
const MyComponent = () => (<>
    <Button className='btn btn-danger'>
        Dangerous !
    </Button>
</>)
```

# Install FontAwesome
```batch
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

To use icons , import them whenever you need them (one at the time)
```jsx
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
...
const MyComponent = () => (<>
    <FontAwesomeIcon icon={faCoffee}/>
</>)

```