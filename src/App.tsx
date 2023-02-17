
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';
import { FormRow } from './components/form-row/form-row';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <FormRow>
                    <Label htmlFor={'Name'}>Name</Label>
                    <Input id={'name'} name={'name'}></Input></FormRow>
                <FormRow>
                    <Label>Email</Label>
                    <Input id={'email'} name={'email'} /></FormRow>
                <FormRow>
                    <Label>Message</Label>
                    <Input id={'message'} name={'message'}></Input>
                </FormRow>
                <FormRow>
                    <SubmitButton />
                </FormRow>
            </form>
        </div>
    );
}

export default App;
