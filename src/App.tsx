
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <Label>Name</Label>
                <Input id={'name'} name={'name'} />
                <Label>Email</Label>
                <Input id={'email'} name={'email'} />
                <Label>Message</Label>
                <Input id={'message'} name={'message'}></Input>
                <SubmitButton />
            </form>
        </div>
    );
}

export default App;
